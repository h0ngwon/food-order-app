import React from 'react';
import styles from './Cart.module.css';
import Modal from '../ui/Modal';

const Cart = (props) => {
	const cartItems = (
		<ul className={styles['cart-items']}>
			{[{ id: 'c1', name: '스시', amount: 1, price: 22000 }].map(
				(item) => {
					return <li>{item.name}</li>;
				}
			)}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
                <span>총 금액</span>
                <span>22,000 원</span>
            </div>

			<div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>닫기</button>
                <button className={styles.button}>주문하기</button>
            </div>
		</Modal>
	);
};

export default Cart;
