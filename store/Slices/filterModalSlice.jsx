import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  isModalOpen: false,
  isFilterModalOpen: false,
  isSortingModalOpen: false,
  filterModalState: "", //[brand, priceRange, category]
  queryParams: {
    lang: "fa",
    business_id: 0,
    page: 1,
    product_id: 0,
    filters: {
      filter: "",
      category_ids: [],
      brand_ids: [],
      just_exsists: false,
      just_off: false,
      min_price: null,
      max_price: null,
      order: "newest",
    },
  },
};

const filterModalSlice = createSlice({
  name: "filterModal",
  initialState,
  reducers: {
    openFilterModal: (state) => {
      state.isModalOpen = true;
      state.isFilterModalOpen = true;
    },
    openSortingModal: (state) => {
      state.isModalOpen = true;
      state.isSortingModalOpen = true;
    },
    setFilterModalState: (state, action) => {
      state.filterModalState = action.payload;
      state.isModalOpen = true;
      state.isFilterModalOpen = true;
    },
    closeModal: (state) => {
      (state.isModalOpen = false), (state.isSortingModalOpen = false);
      state.isFilterModalOpen = false;
      state.filterModalState = "";
    },
  },
});

export const filterModalAction = filterModalSlice.actions;
export default filterModalSlice;
