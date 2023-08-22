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

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edits <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};


export default App;