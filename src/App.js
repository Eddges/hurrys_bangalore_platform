import React from 'react';
import {Route} from 'react-router-dom'
import Vendor from './components/Vendor/Vendor';
import Delivery from './components/Delivery/Delivery';
import Homepage from './components/Homepage/Homepage';
import ProductsGrocery from './components/ProductsGrocery/ProductsGrocery';
import ShopsAvailable from './components/ShopsAvailable/ShopsAvailable';
import OrderConfirm from './components/orderConfirm/OrderConfirm';
import ReferralPage from './components/Referral/ReferralPage';

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
        <Route path="/shops" exact render={() => <ShopsAvailable />} />
        <Route path="/orderconfirmed" exact render={() =>  <OrderConfirm/> } />
        <Route path="/referral" exact render={() =>  <ReferralPage/> } />
      </div>
    )
  }
}

export default App;
