import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../ui/Input';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='수량'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: 0,
					max: 5,
					step: 1,
					defaultValue: 0,
				}}
			/>
			<button>추가</button>
			{!amountIsValid && <p>정확한 수량을 입력해주세요.</p>}
		</form>
	);
};

export default MealItemForm;
