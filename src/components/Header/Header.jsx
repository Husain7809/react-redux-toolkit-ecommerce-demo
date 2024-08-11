import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { getItemSelector } from '../../redux/slices/cartSlice';

const Header = () => {
    const item = useSelector(getItemSelector)
    const totalPrice = item.reduce((acc, item) => acc + item.price, 0)

    return (
        <header className="header">
            <div className="header-content">
                <div className="item-count">
                    <p className="label">Items Added:
                        <span className="count">&nbsp;{item.length}</span>
                    </p>
                </div>
                <div className="total-price">
                    <p className="label">Total Price:
                        <span className="price">&nbsp;₹{totalPrice.toFixed(2)}</span>
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
