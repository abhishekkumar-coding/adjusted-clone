import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Product from './Component/Product/Product';
import AboutUs from './Component/Aboutus/AboutUs';
import Csr from './Component/CSR/Csr';
import Contactus from './Component/Contactus/Contactus';
import Careers from './Component/Careers/Careers';
import Events from './Component/Events/Events';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/csrpage' element={<Csr />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/events' element={<Events/>} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
