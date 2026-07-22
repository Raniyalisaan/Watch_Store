import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Smart from './pages/Smart';
import Brand from './pages/Brand';
import Stores from './pages/Stores';
import Offers from './pages/Offers';
import Watches from './pages/Watches';
import Login from './pages/Login';


import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './utils/ProtectedRoute';
import AddProduct from './admin/AddProduct';
import EditProduct from './admin/EditProduct';
import ListUsers from './admin/ListUsers';
import Forbidden from './pages/Forbidden';
import ListProduct from './admin/ListProduct';
import CartItemsList from './pages/CartItemsList';
import WatchCard from './components/WatchCard';
import WatchesPage from './pages/WatchesPage';

function App() {
  
  const brands = [
    {
      id: 1,
      brandPhoto: "/cards/brand-1.jpg"
    },
    {
      id: 2,
      brandPhoto: "/cards/brand-2.jpg"
    },
    {
      id: 3,
      brandPhoto: "/cards/brand-3.jpg"
    },
    {
      id: 4,
      brandPhoto: "/cards/brand-4.jpg"
    },
    {
      id: 5,
      brandPhoto: "/cards/brand-5.jpg"
    },
    {
      id: 6,
      brandPhoto: "/cards/brand-6.jpg"
    },
    {
      id: 7,
      brandPhoto: "/cards/brand-7.jpg"
    },
    {
      id: 8,
      brandPhoto: "/cards/brand-8.jpg"
    },
    {
      id: 9,
      brandPhoto: "/cards/brand-9.jpg"
    },
    {
      id: 10,
      brandPhoto: "/cards/brand-10.jpg"
    },
    {
      id: 11,
      brandPhoto: "/cards/brand-11.jpg"
    },
    {
      id: 12,
      brandPhoto: "/cards/brand-12.jpg"
    }
  ]
 const watches = [
  {
    id: 1,
    productPhoto: "/cards/card-1.jpg",
    productName: "MILUS",
    productDescription: "Unisex | Snow Star",
    productPrice: 13195,
    productAvailability: "CHECK AVAILABILITY"
  },
  {
    id: 2,
    productPhoto: "/cards/card-2.jpg",
    productName: "GUESS",
    productDescription: "Men | Comet",
    productPrice: 9305,
    productAvailability: "CHECK AVAILABILITY"
  },
  {
    id: 3,
    productPhoto: "/cards/card-3.jpg",
    productName: "VICTORINOX",
    productDescription: "Men | MAVERICK",
    productPrice: 63800,
    productAvailability: "CHECK AVAILABILITY"
  },
  {
    id: 4,
    productPhoto: "/cards/card-4.jpg",
    productName: "KENNETH COLE",
    productDescription: "Men | Carly",
    productPrice: 13195,
    productAvailability: "CHECK AVAILABILITY"
  }
];
  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer position='top-right' autoClose={2000} />
        <Routes>
          <Route path='/' element={<Home brands={brands} />} />
          <Route path='/watches/' element={<Watches watches={watches} />} />
          <Route path='/watches/:id' element={<WatchesPage />} />
          <Route path='/smart' element={<Smart />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='/offer' element={<Offers />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forbidden' element={<Forbidden />} />
          <Route path="/cartitemslist" element={<CartItemsList />} />
          <Route path="/watchcard" element={<WatchCard />} />
         



          <Route path='/admin/add-product' element={<ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>} />
          <Route path='/admin/list-product' element={<ProtectedRoute>
            <ListProduct />
          </ProtectedRoute>} />
          <Route path='/admin/edit-product/:id' element={<ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>} />
          <Route path='/admin/list-users' element={<ProtectedRoute requiredRole={['admin']}>
            <ListUsers />
          </ProtectedRoute>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
