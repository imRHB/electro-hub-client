import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Landing from "./Pages/Landing/Landing";
import Products from './Pages/Products/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from "./Pages/Login/Login";
import Register from './Pages/Register/Register';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from "./Pages/Details/ProductDetails/ProductDetails";
import OrderCheckout from "./Pages/Details/OrderCheckout/OrderCheckout";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/place-order/:productId" element={<OrderCheckout />} />

            {/* test route */}
            <Route path="/nasim" element={<Home />} />;

            {/* Dashboard */}
            {/* <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/manage-order" element={<ManageOrder />} />
            </Route> */}

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/manage-order" element={<ManageOrder />} />
            <Route path="/make-admin" element={<MakeAdmin />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-review" element={<AddReview />} /> */}

            {/* Details */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="product-details" element={<ProductDetails />} />
              <Route path="manage-order" element={<ManageOrder />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="my-order" element={<MyOrder />} />
              <Route path="make-admin" element={<MakeAdmin />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="add-review" element={<AddReview />} />

            </Route>
            <Route path="place-order" element={<OrderCheckout />} />

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
