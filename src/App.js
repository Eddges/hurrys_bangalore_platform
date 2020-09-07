import React from 'react';
import Navbar from './components/Navbar/Navbar';
import WebTop from './components/WebTop/WebTop';
import Vendor from './components/Vendor/Vendor';

class App extends React.Component{
  render(){
    return(
      <div>
        <Vendor />
      </div>
    )
  }
}

export default App;
