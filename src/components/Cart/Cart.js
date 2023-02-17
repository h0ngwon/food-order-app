import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../ui/Modal';
import CartContext from '../../store/cart-context.js';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const totalAmount = cartCtx.totalAmount;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
	const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    };

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartCtx.items.map((item) => {
				return (
					<CartItem
						key={item.id}
						name={item.name}
						amount={item.amount}
						price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
					/>
				);
			})}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>총 금액</span>
				<span>{totalAmount.toLocaleString('ko-KR')} 원</span>
			</div>

			<div className={styles.actions}>
				<button
					className={styles['button--alt']}
					onClick={props.onClose}
				>
					닫기
				</button>
				{hasItems && (
					<button className={styles.button}>주문하기</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
