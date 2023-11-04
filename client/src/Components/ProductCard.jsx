import React, { useContext } from 'react';
import { useGlobalContext } from '../Reducers/cartItems';
import AddIcon from '@mui/icons-material/Add';
export default function ProductCard(props) {
    const { name, price, imageUrl } = props.product;

    const { globalArray, addToGlobalArray } = useGlobalContext();

   
    const handleAddToGlobalArray = () => {
      addToGlobalArray(props.product);
    };

    return (
        <div style={styles.productCard}>
            <img src={imageUrl} alt={name} style={styles.productImage} />
            <div style={styles.productDetails}>
                <h3 style={styles.productName}>{name}</h3>
                <p style={styles.productPrice}>${price}</p>
                <div onClick={handleAddToGlobalArray}><AddIcon/></div>
            </div>
        </div>
    );
}


const styles = {
  productCard: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    maxWidth: '300px',
  },
  productImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  productDetails: {
    textAlign: 'center',
  },
  productName: {
    margin: '5px 0',
    fontSize: '1.2em',
  },
  productPrice: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  }
};
