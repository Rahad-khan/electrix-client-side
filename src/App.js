import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='product/:id' element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
