import Card from "../Ui/Card";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductsItem/ProductItem";

const DUMMY_MEALS = [
{
  id : 'm1',
type: "fruit",
name: "Bananas",
description: "Organic bananas",
rating: 3.5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/bananas.jpeg",
price: 2,
available: 36
},
{
  id : 'm2',
type: "fruit",
name: "Crispy Pink Lady Apples",
description: "Pink lady apples are the best and you'll see just how crisp it is from the first bite. Give it a try, what can it hurt!",
rating: 4.5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/apples.jpeg",
price: 0.50,
available: 16
},
{
  id : 'm3',
type: "fruit",
name: "Sweetest® Mango",
description: "It’s mango season again... who doesn’t love that!",
rating: 5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/mango.jpg",
price: 0.85,
available: 5
},
{
  id : 'm4',
type: "fruit",
name: "Seedless Grapes",
description: "Yummy brand seedless grapes 900g",
rating: 5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/grapes.jpg",
price:3.75,
available: 5
},
{
  id : 'm5',
type: "fruit",
name: "Juicy Figs",
description: "Best figs for cooking 140g",
rating: 5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/figs.png",
price: 2,
available: 25
},
{
  id : 'm6',
type: "fruit",
name: "Pomegranate",
description: "Imported directly from important places",
rating: 5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/pomegranate.png",
price: 1.25,
available: 10
},
{
  id : 'm7',
type: "bakery",
name: "Bread",
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
rating: 4.5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/bread.jpeg",
price: 1.25,
available: 2
},
{
  id : 'm8',
type: "bakery",
name: "Croissants",
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
rating: 4.0,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/croissants.jpeg",
price: 3.50,
available: 9
},
{
  id : 'm9',
type: "drinks",
name: "Coffee",
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
rating: 3.5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/coffee.jpeg",
price: 0.65,
available: 100
},
{
  id : 'm10',
type: "drinks",
name: "Coca-Cola",
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
rating: 1.5,
img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/coca-cola.jpeg",
price: 0.99,
available: 10
}
];

const AvailableProducts = () => {
  const productsList = DUMMY_MEALS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      img={product.img}
      rating={product.rating}
      available={product.available}
      price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
