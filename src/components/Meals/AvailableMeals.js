import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: "m2",
    name: "Pizza",
    description: "Delicious pizza with fresh toppings",
    price: 12.99,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Juicy beef patty with all the fixings",
    price: 8.99,
  },
  {
    id: "m4",
    name: "Taco",
    description: "Spicy and savory with fresh guacamole",
    price: 4.99,
  },
  {
    id: "m5",
    name: "Pad Thai",
    description: "Classic Thai dish with rice noodles and peanuts",
    price: 10.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
