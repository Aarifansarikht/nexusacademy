import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
    bio?: string;
  };
  price: number;
  image: string;
  thumbnail: string;
  category: string;
  rating: number;
  studentsCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessonsCount: number;
}

interface CourseState {
  courses: Course[];
  filteredCourses: Course[];
  selectedCourse: Course | null;
  isLoading: boolean;
  searchQuery: string;
}

const initialState: CourseState = {
  courses: [],
  filteredCourses: [],
  selectedCourse: null,
  isLoading: false,
  searchQuery: '',
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
      state.filteredCourses = action.payload;
    },
    setSelectedCourse: (state, action: PayloadAction<Course | null>) => {
      state.selectedCourse = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredCourses = state.courses.filter(course =>
        course.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        course.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCourses, setSelectedCourse, setSearchQuery, setLoading } = courseSlice.actions;
export default courseSlice.reducer;
