import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductGroup from './components/ProductGroup';


class App extends React.Component {
  render() {
    return <div  >
      <NavBar />
      <ProductGroup />
    </div>
  }
}

export default App;