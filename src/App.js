import { useState } from 'react';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Cart from './components/Cart/Cart';
import Confirm from './components/UI/Confirm/Confirm';

const MEALS_DATA = [
  {
    id: '1',
    title: 'Hamburger',
    desc: '100% Aussie beef,topped with onion,pickles,zesty ketchup and mustard,all on a soft,fluffy bun.',
    price: 5,
    img: '/img/meals/1.png',
  },
  {
    id: '2',
    title: 'Double Quarter Pounder',
    desc: 'Take two quarter pounds of 100% Aussie beef.',
    price: 8,
    img: '/img/meals/2.png',
  },
  {
    id: '3',
    title: 'Big Mac',
    desc: 'Then comes the delicious combination of crisp iceberg lettuce,melting signature cheese.',
    price: 12,
    img: '/img/meals/3.png',
  },
  {
    id: '4',
    title: 'McSpicy',
    desc: 'The fiery McSpicy is so hot that it will bring tears to your eyes.',
    price: 10,
    img: '/img/meals/4.png',
  },
  {
    id: '5',
    title: 'Grilled Chicken Deluxe',
    desc: '100% Aussie chicken breast combined with Aussie Jack Cheese.',
    price: 10,
    img: '/img/meals/5.png',
  },
  {
    id: '6',
    title: 'McChicken',
    desc: 'Topped with fresh,Australian-grown lettuce and our exceptional sauce.',
    price: 9,
    img: '/img/meals/6.png',
  },
  {
    id: '7',
    title: 'Aioli Chicken McWrap',
    desc: '100% Aussie RSPCA Approved chicken breast inside a delicious wholemeal tortilla.',
    price: 8.5,
    img: '/img/meals/7.png',
  },
];

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const filterHandler = (keyword) => {
    // console.log(keyword);
    // console.log(MEALS_DATA);
    const newMealsData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    // console.log(newMealsData);
    setMealsData(newMealsData);
  };

  const addItem = (meal) => {
    const newCart = { ...cartData };
    if (newCart.items.indexOf(meal) === -1) {
      newCart.items.push(meal);
      meal.amount = 1;
    } else {
      meal.amount += 1;
    }

    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;
    setCartData(newCart);
  };

  const removeItem = (meal) => {
    const newCart = { ...cartData };
    meal.amount -= 1;
    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;
    setCartData(newCart);
  };

  const clearCart = () => {
    const newCart = { ...cartData };
    newCart.items.forEach((item) => delete item.amount);
    newCart.items = [];
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;
    setCartData(newCart);
  };

  return (
    <CartContext.Provider
      value={{ ...cartData, addItem, removeItem, clearCart }}
    >
      <div>
        <FilterMeals onFilter={filterHandler} />
        <Meals mealsData={mealsData} />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
