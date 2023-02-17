import { useState } from 'react';
import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
    const [cartShow, setCartShow] = useState(false);
    
    const showCartHandler = () => {
        setCartShow(true);
    }
    
    const hideCartHandler = () => {
        setCartShow(false);
    }

	return (
		<CartProvider>
			{cartShow && <Cart onClose={hideCartHandler}/>}
			<Header onShowCart={showCartHandler}/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
