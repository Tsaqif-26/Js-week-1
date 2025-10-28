import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Cart from "./pages/Cart";
import AdminRoute from "./components/AdminRoute";

function App() {

  const {user, logout} = useAuth()

  return (
    <Router>

     <nav className="bg-gray-100 shadow-md py-4 px-6 flex justify-between items-center transition-colors duration-300">
  <div className="text-2xl font-bold text-indigo-600 ">
    
    
    <Link to='/products'>Tokoku</Link>       
  </div>

  <div className="flex gap-4 items-center">
    <Link
      to="/products"
      className="text-gray-800  hover:text-indigo-600 "
    >
      Produk
    </Link>

    {user ? (
      <>
        <Link
          to='/dashboard'
          className="text-gray-800 hover:text-indigo-600 "
        >
          Dashboard
        </Link>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </>
    ) : (
      <Link
        to='/login'
        className="bg-indigo-500 text-white px-3 py-1 rounded-lg hover:bg-indigo-600 transition"
      >
        Login
      </Link>
    )}

    <Link
      to="/cart"
      className="text-gray-800  hover:text-indigo-600"
    >
      Keranjang
    </Link>

  </div>
</nav>

      
      <div className="min-h-screen transition-colors duration-300">
       <Routes>
        <Route path="/" element={<Navigate to='/products'/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/dashboard" element={<AdminRoute> <Dashboard /> </AdminRoute>}/>
      </Routes>
     </div>
    </Router>
  )
}

export default App
