import './App.css';
import Greet from './Greet';
import ProductCard from './ProductCard';

function App() {
  return (
    <div class="App">
      <Greet name="subhi" />
      <ProductCard title= "iPhone 14 pro max" price = "1,20,00" image="https://www.digitaltrends.com/wp-content/uploads/2022/10/iphone-14-pro-max-hero-photo.jpg?resize=625%2C417&p=1"/>


    </div>
  );
 
}

export default App;
