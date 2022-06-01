
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import {Routes,Route, useParams} from "react-router-dom"
import Product from './components/Product';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes >

      <Route path ="/" element = { <Home/>} />
      <Route path ="/about" element = { <About/>} />

      <Route path ="/products/*" element = { <Products/>} >
      <Route path =":id" element = { <Product/>} />
      </Route>
     
     </Routes>
    
      
     
    </div>
  );
}

export default App;

// / is not mandatory
// for nested info we need 3 changes
// 1. parednt route should accept all info fromm url using *
// 2 wrap child with parent and remove duplicate path info
// use outlet tag on where we want to show child info



// /// 1. install
// // 2. Wrap App in Browser Router
// // 3. Create Routes and Route 
// 4. Link and useNavigate for goving to that page
// 5 Having Dynamic information in a route /:key  and read it using useParams
// 6 Having Nested Routes
 
// <Routes>
//   <Route>
//     <Route/>
//   </Route>