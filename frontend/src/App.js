import './App.css';
import Arrivals from './Arrivals';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" index element={<Arrivals />}></Route>
    </Routes>
    </div>
  );
}

export default App;
