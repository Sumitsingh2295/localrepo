import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import LearnHooks from './Components/Module/LearnHooks';
import Add from './Components/Pages/Admin/Category/Add';
import List from './Components/Pages/Admin/Category/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element= {<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/learn" element={<LearnHooks />}/>
            <Route path="/admin/category/add" element={<Add/>}/>
            <Route path="/admin/category/list" element={<List/>}/>


            
            
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;