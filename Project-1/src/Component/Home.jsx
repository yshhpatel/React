import React from 'react';

export default function Home() {
  const menutoggle = () => {
    const MenuItems = document.getElementById("MenuItems");
    if (MenuItems.style.maxHeight === "200px") {
      MenuItems.style.maxHeight = "0px";
    } else {
      MenuItems.style.maxHeight = "200px";
    }
  };

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="index.html">
              <img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" />
            </a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="index.html">Home</a></li>
              <li><a href="product.html">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="account.html">Account</a></li>
            </ul>
          </nav>
          <a href="cart.html">
            <img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" />
          </a>
          <img
            src="https://i.ibb.co/6XbqwjD/menu.png"
            alt=""
            className="menu-icon"
            onClick={menutoggle}
          />
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option value="">Default Sorting</option>
            <option value="">Sort by price</option>
            <option value="">Sort by popularity</option>
            <option value="">Sort by rating</option>
            <option value="">Sort by sale</option>
          </select>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>
        </div>

        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
    </div>
  );
}
