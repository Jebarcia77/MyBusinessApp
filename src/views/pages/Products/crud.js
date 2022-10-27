 
 
 // Read all Products
 export async function fetchData(){
    await axios.get('http://localhost:8000/product')
      .then(res =>{
        setProductList(res.data)
      })    
  }

// Post a product
     async function saveData (product) {
        const fullfilled = await axios.post("http://localhost:8000/product", dataToSave)
          .then(res => {
            setIsUploadingData()
            return true
          })
          .catch(function (error) {
            console.log(error);
            return false;
          });    
        return fullfilled
      }
    
      async function saveImg (images) {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        };
        const formData=new FormData();
        formData.append('file', imageToSave);
        const fullfilled = await axios.post("http://localhost:8000/product/img/", formData, config )
          .then(res => {return true})
          .catch(function (error) {
            console.log(error);
            return false;
          });  
        return fullfilled  
      }
    
    export async function addNewProductHandler(product, images){
        await Promise.allSettled([saveData(product),saveImg(images)])
          .then((result)=>{
            
          })
      }


  // get by id a product
  export const getByIdHandler = () => {
    axios.get(`http://localhost:8000/product/${id}`)
      .then(res => console.log(res))
  }

  // update a product
  export const updateByIdHandler = () => {
    axios.put(`http://localhost:8000/product/${id}`)
      .then(res => console.log(res))
  }

  // delete a product
  export const deleteByIdHandler = () => {
    axios.delete(`http://localhost:8000/product/${id}`)
      .then(res => console.log(res))
  }