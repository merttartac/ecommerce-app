import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const PRODUCTS_URL = process.env.PRODUCTS_URL;

const initialState = {
    products: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

export const fetchProducts = createAsyncThunk('/products', async () => {
    try {
        const response = await axios.get('http://localhost:3030/products');
        console.log(response.data)
        return response.data
    } catch (error) {
        return error.message;
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const loadedProducts = action.payload;
                state.products = loadedProducts;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectAllProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

export default productsSlice.reducer;