import React ,{useState,useEffect , Link} from 'react';
import axios from'axios';
function Products() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('https://example.com/api/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }


  export default Products;