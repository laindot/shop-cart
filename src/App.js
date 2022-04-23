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
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products addToCart={() => null} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
