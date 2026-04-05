import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Weather from "./pages/Weather/Weather";
import Films from "./pages/Films/Films";
import Content from './components/Content/Content'
import Todo from "./pages/Todo/Todo";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Content />} />
              <Route path="Inbox" element={<Inbox />} />
              <Route path="Weather" element={<Weather />} />
              <Route path="SearchFilms" element={<Films />} />
              <Route path="Todo" element={<Todo />} />
              <Route path="Settings" element={<Settings />} />
              
              
            </Route>

            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
