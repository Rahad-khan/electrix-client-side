import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import RequireAuth from './pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Login/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import Payment from './pages/Dashboard/Payment';
import RequireAdmin from './pages/Shared/RequireAdmin';
import ManageOrder from './pages/Dashboard/ManageOrder';
import AddProduct from './AddProduct';
import ManageProduct from './pages/Dashboard/ManageProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import MyPortfolio from './pages/Portfolio/MyPortfolio';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='portfolio' element={<MyPortfolio />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='product/:id' element={
          <RequireAuth>
            <Product />
          </RequireAuth>}>
        </Route>
        <Route path='product/:id' element={
          <RequireAuth>
            <Product />
          </RequireAuth>}>
        </Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
