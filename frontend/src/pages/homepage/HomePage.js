import ProductsGrid from '../../components/products-grid/ProductsGrid';
import { Page } from './HomePage.styles';
import { useHomeFetch } from './../../hooks/useHomeFetch';


const HomePage = () => {

  const {products, productsStatus} = useHomeFetch();

  return (
    <Page>
      <ProductsGrid products={products} productsStatus={productsStatus} />
    </Page>
  )
}

export default HomePage;