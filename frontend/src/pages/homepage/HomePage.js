import ProductsGrid from '../../components/products-grid/ProductsGrid';
import { Page } from './HomePage.styles';
import { useHomeFetch } from './../../hooks/useHomeFetch';
import Slider from '../../components/slider/Slider';


const HomePage = () => {

  const { products, productsStatus } = useHomeFetch();

  return (
    <Page>
      <Slider products={products} />
      <ProductsGrid products={products} productsStatus={productsStatus} />
    </Page>
  )
}

export default HomePage;