import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCategories = createAsyncThunk(
  "productsSlice/fetchCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCategory = createAsyncThunk(
  "productsSlice/fetchCategory",
  async (category, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await res.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchProductbyId = createAsyncThunk(
  "productsSlice/fetchProductbyId",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  categories: [],
  productDetails: [],
};

const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProductbyId.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
