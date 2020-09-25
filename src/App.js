import React from 'react';
import {Route} from 'react-router-dom'
import Vendor from './components/Vendor/Vendor';
import Delivery from './components/Delivery/Delivery';
import Homepage from './components/Homepage/Homepage';
import ProductsGrocery from './components/ProductsGrocery/ProductsGrocery';
import ShopsAvailable from './components/ShopsAvailable/ShopsAvailable';
import OrderConfirm from './components/orderConfirm/OrderConfirm';
import ReferralPage from './components/Referral/ReferralPage';
import Cancellation from './components/FooterComponents/Cancellation';
import Privacy from './components/FooterComponents/Privacy';
import Terms from './components/FooterComponents/Terms';
import CategoryRedirect from './components/CategoryRedirect/CategoryRedirect';
import LocationSearchInput from './AutoComplete';
import ShopDetails from './components/ShopDetails/ShopDetails';
import RateUs from './components/RateUs/RateUs';
import ContactUs from './components/ContactUs/ContactUs';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Checkout from './components/Checkout/Checkout';
import ProfileSection from './components/ProfileSection/ProfileSection';
import PackageDrop from './components/PackageDrop/PackageDrop';
import CustomerSupport from './components/CustomerSupport/CustomerSupport';

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
        <Route path="/categories" exact render={() => <ProductsGrocery />} />
        <Route path="/shops" exact render={() => <ShopsAvailable />} />
        <Route path="/orderconfirmed" exact render={() =>  <OrderConfirm/> } />
        <Route path="/referral" exact render={() =>  <ReferralPage/> } />
        <Route path="/shopdetails" exact render={() => <ShopDetails />} />
        <Route path="/cancellation" exact render={() => <Cancellation />} />
        <Route path="/privacy" exact render={() => <Privacy />} />
        <Route path="/terms" exact render={() => <Terms />} />
        <Route path="/redirect" exact render={() => <CategoryRedirect />} />
        <Route path="/rate" exact render={() => <RateUs />} />
        <Route path="/contact" exact render={() => <ContactUs about='false' />} />
        <Route path="/about" exact render={() => <ContactUs about='true' />} />
        <Route path="/product" exact render={() => <ProductDetails />} />
        <Route path="/checkout" exact render={() => <Checkout />} />
        <Route path="/profile" exact render={() => <ProfileSection />} />
        <Route path="/profile-orders" exact render={() => <ProfileSection active="orders" />} />
        <Route path="/wallet" exact render={() => <ProfileSection active="wallet" />} />
        <Route path="/package" exact render={() => <PackageDrop />} />
        <Route path="/customer-support" exact render={() => <ProfileSection active="customer" />} />
        <Route path="/customer-faq" exact render={() => <ProfileSection active="faq" />} />
        <Route path="/faq-question" exact render={() => <ProfileSection active="fques" />} />


        {/* <LocationSearchInput /> */}
      </div>
    )
  }
}

export default App;
