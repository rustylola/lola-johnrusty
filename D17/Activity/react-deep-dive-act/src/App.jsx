import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <Router>
        <NavigationBar></NavigationBar>
      </Router>
    </>
  );
}

export default App