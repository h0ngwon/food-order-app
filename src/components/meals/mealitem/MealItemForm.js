import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../ui/Input';

const MealItemForm = (props) => {
	return (
		<form className={styles.form}>
			<Input
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
		</form>
	);
};

export default MealItemForm;
