import {useState, useEffect} from 'react';
import { Box, TextField , MenuItem , Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FileInput from 'ui-component/inputFile';
import SaveIcon from '@mui/icons-material/Save';
import Iconify from 'ui-component/Iconify';
import {addNewProductHandler} from '../../views/pages/Products/crud'

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];



export const NewProductForm = () => {

  const [currency, setCurrency] = useState('USD');
  const [isUploadingData, setIsUploadingData] = useState(false);
  const [isUploadingImg, setIsUploadingImg] = useState(false);
  const [userProps,setUserProps] = useState([]);
  const [dataToSave,setDataToSave] = useState([]);
  const [imageToSave, setImageToSave] = useState(null);


  const handleSubmit = () => {
    addNewProductHandler(dataToSave,imageToSave)
  }
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDataToSave(values => ({...values, [name]: value}));    
    //setCurrency(event.target.value);
  };
  function addUserpropInput () {
    setUserProps([...userProps,{key:"val"}]);
  };

  function removeUserpropInput (index) {
    var list = [...userProps];
    list.splice(index,1);
    setUserProps(list);
  }

  function handleValChange(e, index){
    const {name, value} = e.target;
    const list = [...userProps];
    const key =Object.keys(list[index])[0]
    list[index][key] = value
    setUserProps(list)
    setDataToSave(values => ({...values, user_props: userProps}))
  }
  function handleKeyChange(e, index){
    const {name, value} = e.target;
    const list = [...userProps];
    var obj ={};
    obj[value] = list[index][name];
    list.splice(index,1,obj);
    setUserProps(list);
    setDataToSave(values => ({...values, user_props: userProps}));
  }

  function handleImgChange(file){
    //setDataToSave(values => ({...values, product_img: url}))
    setImageToSave(file);
  }

 useEffect(() => {
    console.log(dataToSave);
  },[userProps,dataToSave]);

  return (
    <>
    <Box
          sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
      >
        <TextField
          required
          id="productName"
          name='name'
          label="Nombre"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          required
          id="productCode"
          name='product_code'
          label="Código"
          onChange={handleChange}
        />
        <TextField
          id="productDescription"
          name='description'
          label="Descripción"
          multiline
          onChange={handleChange}
        />
        <TextField
          id="purchase_price"
          name='purchase_price'
          label="Precio de compra"
          onChange={handleChange}
        />
        <TextField
          id="sale_price"
          name='sale_price'
          label="Precio de venta registrado"
          onChange={handleChange}
        />
        <TextField
          id="sale_price_current"
          name='sale_price_current'
          label="Precio de venta actual"
          onChange={handleChange}
        />
        <TextField
          id="sold_products"
          name='sold_products'
          label="Productos vendidos"
          defaultValue= "0"
          onChange={handleChange}
        />
        <TextField
          id="stock"
          name='stock'
          label="Stock"
          onChange={handleChange}
        />
        <TextField
          id="category"
          name='category'
          select
          label="Categoria"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FileInput id="product_img" onImgChange={handleImgChange}/>
        <Button variant="contained" onClick={addUserpropInput} startIcon={<Iconify icon="eva:plus-fill" />}/>   
        {userProps.map((userProp, index) => (
            <div key={index}>        
            <Grid  container spacing={1}>
                <Grid item xs={5}>
                    <TextField
                        fullWidth 
                        name={Object.keys(userProp)[0]}
                        type="text"
                        id="service"
                        value={Object.keys(userProp)[0]}
                        onChange={(e) => handleKeyChange(e,index)}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        fullWidth 
                        name={userProp.key}
                        value={userProp.key}
                        onChange={(e) => handleValChange(e,index)}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text" startIcon={<Iconify icon="fluent:delete-12-regular" color='red' />} onClick={() => removeUserpropInput(index)} /> 
                </Grid>
            </Grid>
            </div>
        ))}
        <Box>
          <LoadingButton
            endIcon={<SaveIcon />}
            loading={false}
            loadingPosition="end"
            variant="contained"
            onClick={handleSubmit}
          >
            Save
          </LoadingButton>
        </Box>
      </Box>
        </>
  );
};
export default NewProductForm;
