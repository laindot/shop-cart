import { Component } from 'react';
import BubbleAlert from './bubbleAlert';
import CartDetails from './cartDetails';

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
};

class Cart extends Component {
  render() {
    const { cart, isCartDisplayed, displayCart } = this.props;
    const totalQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {totalQuantity !== 0 ? <BubbleAlert value={totalQuantity} /> : null}
        </span>
        <button style={styles.cart} onClick={displayCart}>
          Cart
        </button>
        {isCartDisplayed ? <CartDetails cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;
