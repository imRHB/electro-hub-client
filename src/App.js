import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products/Products';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Login from "./Pages/Login/Login";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-order" element={<ManageOrder />} />
            <Route path="/make-admin" element={<MakeAdmin />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/add-product" element={<AddProduct />} />

            {/* <Route path="/manage-order" element={<ManageOrder/>}
          <Route path="/dashboard/*" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route path="" element={<DashboardHome />} />
            <Route path="manage-order" element={<ManageOrders />} />
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
      </AuthProvider>
    </div>
  );
}

export default App;
