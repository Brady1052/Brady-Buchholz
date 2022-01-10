import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXfv6Z9R/t9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=")` 
    }}>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;



