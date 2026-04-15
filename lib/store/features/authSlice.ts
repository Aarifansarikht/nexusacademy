import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
  enrolledCourseIds: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    enrollCourse: (state, action: PayloadAction<string>) => {
      if (state.user) {
        if (!state.user.enrolledCourseIds) {
          state.user.enrolledCourseIds = [];
        }
        if (!state.user.enrolledCourseIds.includes(action.payload)) {
          state.user.enrolledCourseIds.push(action.payload);
        }
      }
    },
  },
});

export const { setUser, setLoading, logout, enrollCourse } = authSlice.actions;
export default authSlice.reducer;
