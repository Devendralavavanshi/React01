
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategories from './pages/ShopCategories';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';




function App() {
  
  return (
   <div>
   <BrowserRouter>
    <Navbar/>
<Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/mens' element={<ShopCategories category='men'/>}/>
<Route path='/women' element={<ShopCategories category='women'/>}/>
<Route path='/kids' element={<ShopCategories category='kids'/>}/>
 <Route path='/product' element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
 </Route>
 <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>
   </BrowserRouter>
    
   </div>
  )
}

export default App;
