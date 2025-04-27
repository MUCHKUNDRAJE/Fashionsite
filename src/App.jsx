import { Routes, Route } from 'react-router-dom';
import Login from './routes/login';
import Signin from './routes/signIn';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Item from './routes/item';
import Cart from './routes/Cart';
import Order from './routes/Order';

function App() {
 
  return (
<>
 
 <Routes>
    
     <Route path='/' element={<Home/>}/>
     <Route path='/Shop' element={<Shop/>}/>
     <Route path='/Show/:id' element={<Item/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/Order' element={<Order/>}/>
 </Routes>

</>
  )
}

export default App
