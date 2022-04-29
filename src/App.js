import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import PageNotFount from './pages/PageNotFound/PageNotFount';

function App() {
  return (
    <div className='App font-dmsans'>
      <Header />
      <Routes>
        <Route path='/home' element={<Home></Home>} />

        <Route path='/inventory' element={<PageNotFount></PageNotFount>} />
      </Routes>
    </div>
  );
}

export default App;
