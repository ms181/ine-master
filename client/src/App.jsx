//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Income from "./Components/Income";
import Expenses from "./Components/Expenses";
import Categories from "./Components/Categories/Categories";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Content={Dashboard} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/income" element={<Layout Content={Income} />} />
        <Route path="/expenses" element={<Layout Content={Expenses} />} />
        <Route path="/categories" element={<Layout Content={Categories} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
