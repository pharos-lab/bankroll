<template>
    <div>
      <!-- Recherche -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Rechercher..."
        @input="filterData"
      />
  
      <!-- Filtres -->
      <div v-if="filters.length">
        <label v-for="filter in filters" :key="filter.key">
          {{ filter.label }}
          <select v-model="activeFilters[filter.key]" @change="applyFilters">
            <option value="">Tous</option>
            <option v-for="option in filter.options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </label>
      </div>
  
      <!-- Tableau -->
      <table>
        <thead>
          <tr>
            <!-- Sélection globale -->
            <th><input type="checkbox" @change="selectAll" v-model="selectAllRows"></th>
            <th v-for="(header, index) in headers" :key="index" @click="sortData(header)">
              {{ header.label }}
              <span>{{ getSortIndicator(header.key) }}</span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in paginatedData" :key="rowIndex">
            <td><input type="checkbox" v-model="selectedRows" :value="row"></td>
            <td v-for="(header, index) in headers" :key="index">
              {{ row[header.key] }}
            </td>
            <td>
              <!-- Actions sur les lignes -->
              <button @click="editRow(row)">Modifier</button>
              <button @click="deleteRow(row)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Pagination -->
      <div>
        <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
        <span>Page {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
      </div>
  
      <!-- Actions globales -->
      <div v-if="selectedRows.length">
        <button @click="applyGlobalAction('delete')">Supprimer les sélectionnés</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  // Props
  const props = defineProps({
    headers: Array,
    rows: Array,
    itemsPerPage: {
      type: Number,
      default: 5
    },
    filters: Array
  });
  
  // Émission d'événements vers le parent
  const emit = defineEmits(['edit', 'delete', 'bulkDelete']);
  
  // États réactifs
  const searchQuery = ref('');
  const currentPage = ref(1);
  const sortKey = ref(null);
  const sortOrder = ref('asc');
  const filteredRows = ref([...props.rows]);
  const selectedRows = ref([]);
  const selectAllRows = ref(false);
  const activeFilters = ref({});
  
  // Fonctions calculées
  const totalPages = computed(() => Math.ceil(filteredRows.value.length / props.itemsPerPage));
  
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * props.itemsPerPage;
    const end = start + props.itemsPerPage;
    return filteredRows.value.slice(start, end);
  });
  
  // Fonctions
  const filterData = () => {
    const query = searchQuery.value.toLowerCase();
    filteredRows.value = props.rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    applyFilters();
    currentPage.value = 1;
  };
  
  const applyFilters = () => {
    let filtered = props.rows;
    Object.keys(activeFilters.value).forEach((key) => {
      if (activeFilters.value[key]) {
        filtered = filtered.filter((row) => row[key] === activeFilters.value[key]);
      }
    });
    filteredRows.value = filtered;
    currentPage.value = 1;
  };
  
  const sortData = (header) => {
    if (sortKey.value === header.key) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey.value = header.key;
      sortOrder.value = 'asc';
    }
    filteredRows.value.sort((a, b) => {
      if (sortOrder.value === 'asc') {
        return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
      } else {
        return a[sortKey.value] < b[sortKey.value] ? 1 : -1;
      }
    });
  };
  
  const getSortIndicator = (key) => {
    if (sortKey.value === key) {
      return sortOrder.value === 'asc' ? '↑' : '↓';
    }
    return '';
  };
  
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };
  
  const selectAll = () => {
    if (selectAllRows.value) {
      selectedRows.value = [...filteredRows.value];
    } else {
      selectedRows.value = [];
    }
  };
  
  const editRow = (row) => {
    emit('edit', row);
  };
  
  const deleteRow = (row) => {
    emit('delete', row);
  };
  
  const applyGlobalAction = (action) => {
    if (action === 'delete') {
      emit('bulkDelete', selectedRows.value);
      selectedRows.value = [];
      selectAllRows.value = false;
    }
  };
  
  // Watcher pour mettre à jour les lignes filtrées
  watch(() => props.rows, (newRows) => {
    filteredRows.value = newRows;
    applyFilters();
  });
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    cursor: pointer;
    background-color: #f4f4f4;
  }
  
  button {
    margin: 5px;
  }
  </style>
  