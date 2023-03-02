import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../ui/Card';
import MealItem from '../meals/mealitem/MealItem';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				'https://react-http-practice-647b8-default-rtdb.firebaseio.com/meals.json'
			);

			if (!response.ok) {
				throw new Error('문제가 발생했습니다.');
			}
			const responseData = await response.json();
			const loadedData = [];

			for (const key in responseData) {
				loadedData.push({
					id: key,
					name: responseData[key].name,
					desc: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedData);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={styles.mealsLoading}>
				<p>로딩중 ...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={styles.mealsError}>
				<p>{httpError}</p>
			</section>
		);
	}

	const mealsList = meals.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			desc={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
