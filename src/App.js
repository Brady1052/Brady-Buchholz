import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://media.istockphoto.com/photos/dark-blue-abstract-background-picture-id877787978?b=1&k=20&m=877787978&s=170667a&w=0&h=kvxvkxBm8VeFdbcbTTFS_MPhNyx2rqUEHpTLUC_vVxs=")` 
    }}>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;



