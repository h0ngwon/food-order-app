import React from 'react';
import CartIcon from '../cart/CartIcon';

import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
	return (
		<>
			<button className={styles.button} onClick={props.onClick}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>장바구니</span>
				<span className={styles.badge}>2</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
