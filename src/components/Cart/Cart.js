import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../ui/Modal';
import CartContext from '../../store/cart-context.js';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const cartCtx = useContext(CartContext);
	const totalAmount = cartCtx.totalAmount;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		await fetch(
			'https://react-http-practice-647b8-default-rtdb.firebaseio.com/order.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					orderItems: cartCtx.items,
				}),
			}
		);
		setIsSubmitting(false);
		setDidSubmit(true);
        cartCtx.clearCart();
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

	const modalActions = (
		<div className={styles.actions}>
			<button className={styles['button--alt']} onClick={props.onClose}>
				닫기
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					주문하기
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={styles.total}>
				<span>총 금액</span>
				<span>{totalAmount.toLocaleString('ko-KR')} 원</span>
			</div>
			{isCheckout && (
				<Checkout
					onSubmit={submitOrderHandler}
					onCancel={props.onClose}
				/>
			)}
			{!isCheckout && modalActions}
		</>
	);

	const isSubmittingCartContent = <p>데이터 전송중 ...</p>;
	const didSubmitContent = (
		<>
			<p>주문이 완료되었습니다 !</p>
			<div className={styles.actions}>
				<button
					className={styles.button}
					onClick={props.onClose}
				>
					닫기
				</button>
			</div>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingCartContent}
			{!isSubmitting && didSubmit && didSubmitContent}
		</Modal>
	);
};

export default Cart;
