import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/userdetails/:id' element={<UserDetails/>} />

    </Routes>
     
    </>
  );
}

export default App;
