import Product from "../components/Product.jsx";


export default function App() {
  const handleClick = () => {
		alert("I'm a button!");
	};
  return (
    <div>
      <h1>Best selling</h1>
      <button onClick={handleClick}>Click me!</button>
      <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    
    </div>
  );
}
