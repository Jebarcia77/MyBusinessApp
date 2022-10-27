import {useState, useEffect} from 'react';
import { Box, Button } from '@mui/material';

const FileInput = ({onImgChange}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    function handleChange(e){
      setSelectedImage(e.target.files[0])   
    }
    useEffect(() => {
      if (selectedImage) {
        const url = URL.createObjectURL(selectedImage);
        setImageUrl(url);        
        onImgChange(selectedImage);
      }
    }, [selectedImage]);
  
    return (
      <>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: 'none' }}
          onChange={e => handleChange(e)}
        />
        <label htmlFor="select-image">
          <Button variant="outlined" color="primary" component="span" style={{display:"flex"}}>
            Subir Imagen
          </Button>
        </label>
        {imageUrl && selectedImage && (
          <Box mt={2} textAlign="center">
            <div>Preview:</div>
            <img src={imageUrl} alt={selectedImage.name} height="300px" />
          </Box>
        )}
      </>
    );
  };
  
  export default FileInput;