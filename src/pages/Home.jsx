import axios from 'axios';
import { useEffect, useState } from 'react';
import { Categories } from '../components/Categories/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import { Sort } from '../components/Sort/Sort';

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoadingPizzas, setIsLoadingPizzas] = useState(false);
  const [sortSelected, setSortSelected] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [activeCategory, setActiveCategory] = useState(0);

  console.log(activeCategory, sortSelected);

  const category = activeCategory > 0 ? `category=${activeCategory}` : ''
  const order = sortSelected.sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = sortSelected.sortProperty.replace('-', '')

  useEffect(() => {
    const fetchPizzas = async () => {
      setIsLoadingPizzas(true);
      const response = await axios
        .get(
          `https://62a63f4d430ba53411d2e408.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`,
        )
        .then((res) => {
          return res.data;
        })
        .then((arr) => {
          setPizzas(arr);
          setIsLoadingPizzas(false);
        });
      window.scrollTo(0, 0);
      return response;
    };
    fetchPizzas();
  }, [activeCategory, sortSelected.sortProperty]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories activeCategory={activeCategory} onClickCategory={setActiveCategory} />
          <Sort sortSelected={sortSelected} onChangeSort={setSortSelected} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoadingPizzas
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
        </div>
      </div>
    </>
  );
};
