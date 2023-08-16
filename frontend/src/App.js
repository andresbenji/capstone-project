import Footer from './footer.jsx';
import './App.css';
import './components/footer.css'

const App = () => {

  return (
   <>
   <Router >
   <Header />
    <Routes>
          <Route path="/home" element={<Footer/>} />
          {/* { <Route path="/products" element={<ProductList/>} /> } */}
          {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  <Footer />
  </Router>
   </>
  );
};


export default App;