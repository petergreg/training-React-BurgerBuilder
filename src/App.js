import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;




  