import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts, selectProductsStatus, fetchProducts } from '../reducers/productsSlice';

export const useHomeFetch = () => {

    const dispatch = useDispatch();

    const products = useSelector(selectAllProducts);
    const productsStatus = useSelector(selectProductsStatus);

    console.log('PRODUCTS: %o', products)
    console.log('STATUS: %o', productsStatus)

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productsStatus, dispatch]);

    return {products, productsStatus};
}

