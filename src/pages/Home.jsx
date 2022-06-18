import axios from 'axios';
import { useEffect, useState } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Pagination } from '../components/Pagination/Pagination';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import { Sort } from '../components/Sort/Sort';

export const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoadingPizzas, setIsLoadingPizzas] = useState(false);
  const [sortSelected, setSortSelected] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)


  console.log(activeCategory, sortSelected);

  const category = activeCategory > 0 ? `category=${activeCategory}` : ''
  const order = sortSelected.sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = sortSelected.sortProperty.replace('-', '')
  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    const fetchPizzas = async () => {
      setIsLoadingPizzas(true);
      const response = await axios
        .get(
          `https://62a63f4d430ba53411d2e408.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
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
  }, [activeCategory, sortSelected, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  const pizzaBlock = pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)


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
            ? skeletons
            : pizzaBlock}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};
