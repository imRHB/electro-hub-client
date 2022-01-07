import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Landing from "./Pages/Landing/Landing";
import Products from './Pages/Products/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from "./Pages/Details/ProductDetails/ProductDetails";
import OrderCheckout from "./Pages/Details/OrderCheckout/OrderCheckout";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/loginAndRegisterd/Login/Login";
import Registerd from "./Pages/loginAndRegisterd/Registerd/Registerd";
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AdminRoute from "./Pages/AdminRoute/AdminRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetails />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registerd />} />
            <Route path="/place-order/:productId" element={<PrivateRoute>
              <OrderCheckout />
            </PrivateRoute>}>

            </Route>
            {/* <Route path="/place-order/:productId" element={<OrderCheckout />} /> */}

            {/* Dashboard | Private Route */}

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="my-order" element={<MyOrder />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="manage-order" element={<ManageOrder />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="make-admin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
