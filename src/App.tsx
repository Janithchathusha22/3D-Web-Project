

import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import WhatsappChat from "./components/ui/WhatsappChat";
import Home from "./views/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/the-untold-power-of-your-value-proposition" element={<BlogOne />} />
          <Route path="/unveiling-your-brand-s-soul" element={<BlogTwo/>} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      
      <Outlet />
     
    
    </>
  );
}

export default App;
