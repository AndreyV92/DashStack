import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import Inbox from "./pages/Inbox";
import { store } from './app/store/store';
import { Provider } from "react-redux";

import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login/Login";



function App() {
  return (
    <>
    <Provider store={store}>

      <ToastContainer    
        // autoClose={5000}            
                     
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Inbox" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
