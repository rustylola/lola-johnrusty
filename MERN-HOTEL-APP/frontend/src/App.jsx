import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './App.css'
import Layout from './layouts/Layout';
import Register from './pages/Register';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Layout>
            <p>Home Page</p>
          </Layout>
        }>

        </Route>
        <Route path='/search' element={
          <Layout>
            <p>Search Page</p>
          </Layout>
        }>

        </Route>
        <Route path='/register' element={
          <Layout>
            <Register/>
          </Layout>
        }>

        </Route>
        <Route path='*' element={ <Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App
