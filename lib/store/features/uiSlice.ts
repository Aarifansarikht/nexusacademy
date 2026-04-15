import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isSearchOpen: boolean;
  isSidebarOpen: boolean;
  activeTab: string;
}

const initialState: UIState = {
  isSearchOpen: false,
  isSidebarOpen: true,
  activeTab: 'overview',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { toggleSearch, setSearchOpen, toggleSidebar, setActiveTab } = uiSlice.actions;
export default uiSlice.reducer;
