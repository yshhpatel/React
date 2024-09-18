import React, { useState } from 'react';

export default function Product() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [productDetails, setinfo] = useState({});
  const [view, setView] = useState('sellerForm');
  const [errors, setErrors] = useState({});

  const validateSellerForm = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    if (!phone) tempErrors.phone = "Phone number is required";
    if (!brand) tempErrors.brand = "Brand name is required";
    return tempErrors;
  };

  const validateProductForm = () => {
    let tempErrors = {};
    if (!category) tempErrors.category = "Category is required";
    if (!productDetails.name) tempErrors.name = "Product name is required";
    if (!productDetails.price) tempErrors.price = "Product price is required";
    if (!productDetails.description) tempErrors.description = "Product description is required";
    return tempErrors;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateSellerForm();
    if (Object.keys(formErrors).length === 0) {
      setView('productForm');
    } else {
      setErrors(formErrors);
    }
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateProductForm();
    if (Object.keys(formErrors).length === 0) {
      setView('productCard');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      {view === 'sellerForm' && (
        <div className="seller">
          <form onSubmit={formSubmit}>
            <h2>Seller Information</h2>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <input
              type="text"
              placeholder="Brand Name"
              onChange={(e) => setBrand(e.target.value)}
            />
            {errors.brand && <p className="error">{errors.brand}</p>}

            <center>
              <button type="submit">Register</button>
            </center>
          </form>
        </div>
      )}

      {view === 'productForm' && (
        <div className="main-product">
          <form onSubmit={handleProductSubmit}>
            <h2>Select Category</h2>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="electric">Electric</option>
              <option value="gamer">Gamer</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="esports">Esports</option>
            </select>
            {errors.category && <p className="error">{errors.category}</p>}

            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setinfo({ ...productDetails, name: e.target.value })}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="text"
              placeholder="Price"
              onChange={(e) => setinfo({ ...productDetails, price: e.target.value })}
            />
            {errors.price && <p className="error">{errors.price}</p>}

            <textarea
              placeholder="Description"
              onChange={(e) => setinfo({ ...productDetails, description: e.target.value })}
            ></textarea>
            {errors.description && <p className="error">{errors.description}</p>}

            <button type="submit">Confirm</button>
          </form>
        </div>
      )}

      {view === 'productCard' && (
        <div className="product-card">
          <h2>{productDetails.name}</h2>
          <p>Price: ${productDetails.price}</p>
          <p>Description: {productDetails.description}</p>
          <button className="add-to-cart-btn">Have a Look</button>
        </div>
      )}
    </div>
  );
}
