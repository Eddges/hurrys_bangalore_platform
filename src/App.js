import React from 'react';
import Navbar from './components/Navbar/Navbar';
import WebTop from './components/WebTop/WebTop';
import Vendor from './components/Vendor/Vendor';
import Delivery from './components/Delivery/Delivery';
import Homepage from './components/Homepage/Homepage';

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Vendor /> */}
        <Delivery />
        {/* <Homepage /> */}

      </div>
    )
  }
}

export default App;
