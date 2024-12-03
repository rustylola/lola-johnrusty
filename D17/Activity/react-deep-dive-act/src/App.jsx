import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/team' element={<Team />}/>
            <Route path='/team/:id' element={<TeamDetails/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App