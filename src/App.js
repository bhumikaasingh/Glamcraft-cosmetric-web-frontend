import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './pages/client/login/Login';
import Register from './pages/client/register/Register';
import ProductDetails from './pages/client/product-details/product-details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/client/homepage/homepage';
import Profile from './pages/client/profile/profile';
import CartPage from './pages/client/cartpage/cartpage';
import ContactPage from './pages/client/ContactPage/ContactPage';
import AdminDashboard from './pages/admin/AdminDashBoard';
import AdminProductUpdate from './pages/admin/AdminUpdate';
import AdminProfile from './pages/admin/AdminProfile';
import AdminProfileEdit from './pages/admin/AdminProfileEdit';
import AdminCategory from './pages/admin/adminCategory';
import AdminCategoryUpdate from './pages/admin/AdminUpdateCat';
import CheckoutPage from './pages/client/Checkoutpage/checkoutpage';
import OrderPage from './pages/client/AllOrderPage/allorderpage';
import OrderDetails from './pages/client/AllOrderPage/singleOrderPage';
import AdminOrderPage from './pages/admin/adminOrder';
import About from './pages/client/Aboutpage/Aboutpage';
import Shoppage from './pages/client/Shoppage/Shoppage';
  
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:5500/api/products/get_all_products')
      .then(response => response.json())
      .then(responseData => {
        if (responseData.success) {
          setData(responseData.products);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}  data={data} />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/about' element = {< About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage searchQuery={searchQuery} data={data} />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/shop' element = {<Shoppage searchQuery={searchQuery} data={data}/>} />
        <Route path='/profile' element={ < Profile /> } />
        <Route path='/cart' element = { < CartPage  /> } />
        <Route path='/contact' element={< ContactPage />} />
        <Route path='/admin/dashboard' element={< AdminDashboard />} />
        <Route path='/admin/category' element={< AdminCategory />} />
        <Route path='/admin/dashboard/profile' element={< AdminProfile />} />
        <Route path='/admin/profile/update/:id' element={< AdminProfileEdit />} />
        <Route path='/admin/product/update/:id' element={< AdminProductUpdate />} />
        <Route path = '/admin/category/update/:id' element = { < AdminCategoryUpdate />} />
        <Route path = '/admin/order' element = { < AdminOrderPage />} />
        <Route path='/checkout' element={ < CheckoutPage/>} />
        <Route path='/profile/order' element={ < OrderPage />} />
        <Route path='/order-confirmation' element={ < OrderPage />} />
        <Route path = '/orders/:id' element = { <  OrderDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;