import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnIsHilighted, setBtnIsHilighted] = useState(false);
	const cartContext = useContext(CartContext);
    const {items} = cartContext;
	const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnStyles = `${styles.button} ${ btnIsHilighted ? styles.bump : ''}`;
	useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHilighted(true);
        
        const timer = setTimeout(() => {
            setBtnIsHilighted(false);
        },300)

        return () => {
            clearTimeout(timer);
        }
    }, [items]);
	return (
		<>
			<button className={btnStyles} onClick={props.onClick}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>장바구니</span>
				<span className={styles.badge}>{numberOfCartItems}</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
