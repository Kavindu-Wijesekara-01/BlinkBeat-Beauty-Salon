import React, { useState } from 'react';

const Item = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "FANOLA Wonder Volume Care Shampoo 350ml",
      category: "Hair Shampoo",
      price: "Rs.24,990.00",
      image: "./item3.avif",
      description: "Fanola Wonder Volume Care Shampoo revitalises thin, flat hair with a lightweight, vegan formula designed to boost natural volume and bounce.",
    },
    {
      id: 2,
      name: "1000 HOUR Dab-On Hair Colour Concealer",
      category: "Hair Color",
      price: "Rs.18,990.00",
      image: "./item4.avif",
      description: "Flawless coverage in seconds—wherever you need it. The 1000 HOUR Dab-On Hair Colour Concealer is the quick and easy fix for grey roots, thinning spots, and even patchy beards.",
    },
    {
      id: 3,
      name: "GAMMA+ G-Tronic Dual Ionic 2500 Hair Dryer Rose Gold",
      category: "Hair Dryer",
      price: "Rs.36,990.00",
      image: "./item5.avif",
      description: "Super powerful G-TRON digital Motor for longer life, Increased airflow and pressure for professional performance.",
    },
    {
      id: 4,
      name: "L'OREAL Vitamino Color 10 in 1 Multipurpose Spray 190ml",
      category: "Hair Spray",
      price: "Rs.25,990.00",
      discount: "16% OFF",
      image: "./item6.avif",
      description: "L'Oréal Professionnel's Vitamino Color spray, containing resveratrol, is formulated for all types and needs of color-treated hair.",
    },
    {
      id: 5,
      name: "REDKEN Extreme Play-Safe 450 Heat Protect 200ml",
      category: "Heat Protectant",
      price: "Rs.28,990.00",
      image: "./item2.avif",
      description: "This leave-in treatment, infused with plant protein and tourmaline, fortifies hair while shielding strands from heat up to 450°F/230°C.",
    },
    {
      id: 6,
      name: "HIDEHERE Hyaluronic Perfect Cover BB Cream 25ml",
      category: "BB Cream",
      price: "Rs.27,990.00",
      discount: "15% OFF",
      image: "./item1.jpg",
      description: "Hidehere Hyaluronic Perfect Cover BB Cream a multitasking formula that combines the benefits of skincare and makeup.",
    }
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs.', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0).toLocaleString('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 2
    });
  };

  const CartIcon = () => (
    <div 
      className="fixed top-5 right-18 z-50 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={() => setIsCartOpen(true)}
    >
      <div className="relative">
        <svg 
          className="w-7 h-7 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {getTotalItems()}
          </span>
        )}
      </div>
    </div>
  );

  const CartDrawer = () => (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-xs"
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      {/* Cart Drawer */}
      <div className={`absolute right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">{item.name}</h3>
                      <p className="text-pink-600 font-bold text-sm">{item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-pink-600">{getTotalPrice()}</span>
              </div>
              <button className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-linear-to-br from-pink-900 via-black to-pink-800 text-white py-35 overflow-hidden">
        {/* Animated Grid with Pink Lines */}
        <div className="absolute inset-0 opacity-55">
          <div className="grid grid-cols-12 gap-20 md:gap-8 h-full animate-grid-move">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-pink-500/20 h-full"></div>
            ))}
          </div>
        </div>

        

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Products</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover our exclusive collection of imported branded beauty products
          </p>
        </div>
      </div>

      {/* Cart Icon */}
      <CartIcon />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Products Grid */}
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Optimized Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-pink-600 font-semibold bg-pink-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-800">
                      {product.price}
                    </span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;