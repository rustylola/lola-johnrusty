import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormExample from './pages/FormExample';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <>
      <Router>
        <AppNavbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/form' element={<FormExample/>}/>
            <Route path='/product' element={<Product />}>
              <Route path=':id' element={<ProductDetails />}/>
            </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App