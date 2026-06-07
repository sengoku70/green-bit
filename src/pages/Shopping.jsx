import React, { useState } from 'react';
import { ShoppingCart, Trash2, X, Plus, Minus, Check } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    title: 'Eco-Friendly Steel Flask',
    category: 'Reusable',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80',
    desc: 'Double-walled insulated stainless steel bottle. Keeps drinks cold for 24h or hot for 12h.',
  },
  {
    id: 2,
    title: 'Solar Phone Charger',
    category: 'Solar',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500&auto=format&fit=crop&q=80',
    desc: 'Waterproof solar power bank, 20000mAh. Perfect for hiking, camping, and emergency backup.',
  },
  {
    id: 3,
    title: 'Organic Cotton Tote',
    category: 'Organic',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80',
    desc: '100% certified organic cotton canvas bag. Strong, reusable, and biodegradable.',
  },
  {
    id: 4,
    title: 'Bamboo Toothbrush Pack',
    category: 'Organic',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=80',
    desc: 'Set of 4 biodegradable bamboo toothbrushes with BPA-free nylon bristles.',
  },
  {
    id: 5,
    title: 'Portable Solar Lantern',
    category: 'Solar',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=500&auto=format&fit=crop&q=80',
    desc: 'Inflatable, waterproof LED solar light. Ideal for outdoor adventures and lighting gardens.',
  },
  {
    id: 6,
    title: 'Beeswax Food Wraps',
    category: 'Reusable',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8a3f84?w=500&auto=format&fit=crop&q=80',
    desc: 'Set of 3 organic cotton wraps infused with natural beeswax. A plastic-free food wrap alternative.',
  },
];

function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  // Filter products
  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    
    // Show feedback popup
    setJustAdded(product.title);
    setTimeout(() => setJustAdded(null), 2000);
  };

  // Adjust quantity
  const updateQty = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + change;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Get total price
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  const cartItemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="shopping-page">
      {/* Shopping Hero */}
      <section 
        className="shopping-hero" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=80")' }}
      >
        <div className="shopping-hero-content">
          <h1>Crafted with Care for a Sustainable Future.</h1>
          <p>Every purchase helps support eco-friendly manufacturers and funds renewable energy initiatives.</p>
          <a href="#store" className="btn-shopping-cta">
            Shop Now
          </a>
        </div>
      </section>

      {/* Floating Cart Button */}
      <button 
        className="floating-cart-btn" 
        onClick={() => setIsCartOpen(true)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: 'linear-gradient(135deg, #10b981, #06b6d4)',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
          zIndex: 999,
        }}
      >
        <ShoppingCart size={24} />
        {cartItemCount > 0 && (
          <span 
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#8b5cf6',
              borderRadius: '50%',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: '700',
              border: '2px solid #0f172a',
            }}
          >
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Just Added Toast Notification */}
      {justAdded && (
        <div 
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '30px',
            background: 'rgba(16, 185, 129, 0.95)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 999,
            animation: 'fadeInUp 0.3s ease',
          }}
        >
          <Check size={18} />
          <span>Added <strong>{justAdded}</strong> to cart!</span>
        </div>
      )}

      {/* Categories Tabs */}
      <section id="store" className="products-container">
        <div className="categories-tabs">
          {['All', 'Reusable', 'Solar', 'Organic'].map((cat) => (
            <button
              key={cat}
              className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-container">
                <img src={product.image} alt={product.title} className="product-img" />
              </div>
              <div className="product-info">
                <div>
                  <h3 className="product-title">{product.title}</h3>
                  <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '10px' }}>{product.desc}</p>
                </div>
                <div>
                  <div className="product-price">${product.price}</div>
                  <button className="btn-add-cart" onClick={() => addToCart(product)}>
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Cart Drawer Backdrop */}
      <div 
        className={`cart-drawer-backdrop ${isCartOpen ? 'active' : ''}`} 
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Shopping Cart Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>Your Eco-Cart</h2>
          <button className="btn-close-cart" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} style={{ marginBottom: '15px', strokeWidth: 1.5 }} />
              <p>Your cart is empty.</p>
              <p style={{ fontSize: '13px', marginTop: '5px' }}>Add some eco-friendly products to get started!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <div className="cart-item-price">${item.price}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                    <button 
                      onClick={() => updateQty(item.id, -1)} 
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white', padding: '2px', borderRadius: '4px' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>{item.qty}</span>
                    <button 
                      onClick={() => updateQty(item.id, 1)} 
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white', padding: '2px', borderRadius: '4px' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <button className="btn-remove-item" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>
            <button 
              className="btn-checkout" 
              onClick={() => {
                alert('Order processed successfully! Thank you for purchasing sustainably.');
                setCart([]);
                setIsCartOpen(false);
              }}
            >
              Checkout Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shopping;
