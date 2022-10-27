import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Stack, Typography, Button , Modal, Box} from '@mui/material';

// components
import Page from '../../../ui-component/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../../../ui-component/products';
import Iconify from '../../../ui-component/Iconify';
import NewProductForm from 'ui-component/products/newProductForm';
import AsidePanel from 'layout/AsidePanel/AsidePanel';

// mock
import PRODUCTS from '../../../_mock/products';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [productList,setProductList] = useState(PRODUCTS);
  const [isOpenAside, setIsOpenAside] = useState();
  
  // Modal
  const handleAsideToggle = () => setIsOpenAside(!isOpenAside);

  
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

 

  

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

          <Button variant="contained" onClick={handleAsideToggle} startIcon={<Iconify icon="eva:plus-fill" />}>
            Nuevo Producto
          </Button>


        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
          
        </Stack>
        
        <ProductList products={PRODUCTS} />
        <ProductCartWidget />

        <AsidePanel open={isOpenAside} handleToggle={handleAsideToggle} width={600}>
            <NewProductForm addNewProductHandler={addNewProductHandler} />              
        </AsidePanel>

      </Container>
    </Page>
  );
}
