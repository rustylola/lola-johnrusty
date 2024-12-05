import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import SideBarMenu from './components/Sidebarmenu';
import Seminar from './pages/Seminar';


function App() {
  return (
    <Router>
      <NavigationBar />
      <div className='d-flex'>
        <div className='col-auto vh-100'>
          <SideBarMenu />
        </div>
        <div className='p-4 w-100'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/seminars' element={<Seminar/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App