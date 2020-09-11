import React from 'react';
import {Route} from 'react-router-dom'
import Vendor from './components/Vendor/Vendor';
import Delivery from './components/Delivery/Delivery';
import Homepage from './components/Homepage/Homepage';
import ProductsGrocery from './components/ProductsGrocery/ProductsGrocery';

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Vendor /> */}
        {/* <Delivery /> */}
        {/* <Homepage /> */}
        <Route path="/" exact render={() => <Homepage />} />
        <Route path="/delivery" exact render={() => <Delivery />} />
        <Route path="/vendor" exact render={() => <Vendor />} />
        <Route path="/grocery" exact render={() => <ProductsGrocery />} />

      </div>
    )
  }
}

export default App;
