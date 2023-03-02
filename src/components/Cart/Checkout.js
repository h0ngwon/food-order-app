import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {
	const [formValidity, setFormValidity] = useState({
		name: true,
		address: true,
	});
	const nameInputRef = useRef();
	const addressInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredAddressIsValid = !isEmpty(enteredAddress);

		setFormValidity({
			name: enteredName,
			address: enteredAddress,
		});

		const formIsValid = enteredNameIsValid && enteredAddressIsValid;

		if (!formIsValid) {
			return;
		}

		props.onSubmit({
			name: enteredName,
			address: enteredAddress,
		});
	};

	const nameControlStyles = `${styles.control} ${
		formValidity.name ? '' : styles.invalid
	}`;

	const addressControlStyles = `${styles.control} ${
		formValidity.name ? '' : styles.invalid
	}`;

	return (
		<form className={styles.form} onSubmit={confirmHandler}>
			<div className={nameControlStyles}>
				<label htmlFor='name'>이름</label>
				<input type='text' id='name' ref={nameInputRef} />
				{!formValidity.name && <p>이름은 공백일 수 없습니다.</p>}
			</div>
			<div className={addressControlStyles}>
				<label htmlFor='address'>주소</label>
				<input type='text' id='address' ref={addressInputRef} />
				{!formValidity.address && <p>주소는 공백일 수 없습니다.</p>}
			</div>
			<div className={styles.actions}>
				<button type='button' onClick={props.onCancel}>
					취소
				</button>
				<button className={styles.submit}>확인</button>
			</div>
		</form>
	);
};

export default Checkout;
