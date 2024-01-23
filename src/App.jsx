import { useState } from 'react';

const ProductRow = ({ index, product, setProduct }) => {
  const updateField = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  return (
    <div className="product-row">
      <input
        type="number"
        value={product.quantity}
        onChange={(e) => updateField('quantity', e.target.value)}
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => updateField('price', e.target.value)}
      />
      <div>{product.quantity * product.price}</div>
    </div>
  );
};

const PriceCalculator = () => {
  const [products, setProducts] = useState([{ quantity: 0, price: 0 }]);

  const addProduct = () => {
    setProducts([...products, { quantity: 0, price: 0 }]);
  };

  const totalAmount = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return (
    <div className='App'>
      <div className="price-calculator">
        {products.map((product, index) => (
          <ProductRow
            key={index}
            index={index}
            product={product}
            setProduct={(newProduct) => {
              const newProducts = [...products];
              newProducts[index] = newProduct;
              setProducts(newProducts);
            }}
          />
        ))}
        <button onClick={addProduct}>Add Product</button>
        <div>Total Amount: {totalAmount}</div>
      </div>
    </div>
  );
};

export default PriceCalculator;
