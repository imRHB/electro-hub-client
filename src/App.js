import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';




function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/cart" element={<Cart />} />
=======
          {/*<Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
>>>>>>> main
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route path="" element={<DashboardHome />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="addProducts" element={<AddProducts />} />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="addReview" element={<AddReview />} />
          </Route>
          <Route path="/checkout" element={<PrivateRoute>
            <Checkout />
          </PrivateRoute>} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
