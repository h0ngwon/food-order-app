import React from 'react';

import styles from './Header.module.css';
import meals from '../../assets/meals.webp';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>리액트 식당</h1>
				<HeaderCartButton onClick={props.onShowCart}/>
			</header>
			<div className={styles['main-image']}>
				<img src={meals} alt='main header'/>
			</div>
		</>
	);
};

export default Header;
