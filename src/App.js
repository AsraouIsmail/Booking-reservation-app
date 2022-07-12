/* eslint-disable no-unused-vars */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home.jsx"
import List from './pages/List/List.jsx'
import Hotel from "./pages/Hotel/Hotel.jsx"

function App() {
  return (
    //add react router dom to the application
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
