import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-price-rating">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <span className="product-reviews">({product.rating.count} reviews)</span>
                </div>
                <div className="product-rating">
                    <span className="rating-stars">
                        {'★'.repeat(Math.floor(product.rating.rate))}
                        {'☆'.repeat(5 - Math.floor(product.rating.rate))}
                    </span>
                </div>
                <button
                    className="add-to-cart-btn"
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
