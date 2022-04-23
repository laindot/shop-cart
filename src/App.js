import { Component } from 'react';
import Products from './components/products';
import Layout from './components/layout';
import Title from './components/title';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    products: [
      { name: 'Martillo', price: 1500, img: '/products/martillo.jpg' },
      { name: 'Serrucho', price: 2500, img: '/products/serrucho.jpg' },
      { name: 'Alicate', price: 3000, img: '/products/alicate.jpg' },
    ],
    cart: [],
    isCartDisplayed: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              quantity: x.quantity + 1,
            }
          : x
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      }),
    });
  };

  displayCart = () => {
    if (!this.state.cart.length) {
      return;
    }
    this.setState({ isCartDisplayed: !this.state.isCartDisplayed });
  };

  componentDidUpdate() {
    console.log(this.state.cart);
  }

  render() {
    const { isCartDisplayed } = this.state;
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          isCartDisplayed={isCartDisplayed}
          displayCart={this.displayCart}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
