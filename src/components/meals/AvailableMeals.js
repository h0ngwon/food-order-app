import React from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../ui/Card';
import MealItem from '../meals/mealitem/MealItem';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: '스시',
		description: '연어 & 한치 & 광어 & 생새우 & 제철회 초밥 12pcs',
		price: 22000,
	},
	{
		id: 'm2',
		name: '슈니첼',
		description: '유럽식 돼지고기 튀김',
		price: 16000,
	},
	{
		id: 'm3',
		name: '햄버거',
		description: '순쇠고기 100% 패티와 신선한 채소 조합의 햄버거',
		price: 13000,
	},
	{
		id: 'm4',
		name: '샐러드',
		description: '신선한 야채들과 유자 드레싱이 어우러진 샐러드',
		price: 18000,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
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
