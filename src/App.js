import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")` 
    }}>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;



