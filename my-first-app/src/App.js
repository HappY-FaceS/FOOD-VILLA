import "./App.css";

import Greet from "./Greet";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Apple iPhone 13",
    price: "79,999",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
  },
  {
    id: 2,
    title: "Samsung Galaxy Note 8",
    price: "69,999",
    image:
      "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
  },
  {
    id: 3,
    title: "realme C33",
    price: "9,999",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScLIbjCBXdEPVrU9JbSBXehev-srhZ2Nu3ZH1ChIRN-Rjkqa6baKkt9sqhrX5Umac0qvtQrMJOlmn_ufeg-U5bNFOHIQnhs0q4wDx8VkvLjBG7HE4n91s69w&usqp=CAE"
  }
];

function App() {
  // JSX - HTML written JS
  return (
    <div className="App">
      <Greet name="Subhi" />

      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}


export default App;