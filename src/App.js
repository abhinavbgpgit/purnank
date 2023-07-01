import './App.css';
import Navbar from './components/Navbar';
import navbar from './assets/images/navbar.jpeg'
import Leftbar from './Leftbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Leftbar/>
    <Footer/>
     {/* <img style={{marginTop:"200px"}} src={navbar} alt="" width="100%"/> */}
    </div>
  );
}

export default App;
