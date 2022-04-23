import { Component } from 'react';
import Button from './button';

const styles = {
  product: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
    height: '250px',
  },
};

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div style={styles.product}>
        <img style={styles.img} alt='product.name' src={product.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
      </div>
    );
  }
}
export default Product;
