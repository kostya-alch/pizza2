import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Sort } from './components/Sort/Sort';
import './scss/app.scss';


import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from './components/Skeleton/Skeleton';

const App = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoadingPizzas, setIsLoadingPizzas] = useState(false)

  useEffect(() => {
    fetchPizzas()

  }, [])

  const fetchPizzas = async () => {
    setIsLoadingPizzas(true)
    const response = axios.get('https://62a63f4d430ba53411d2e408.mockapi.io/pizzas')
      .then((res) => {
        return res.data
      })
      .then((arr) => {
        setPizzas(arr)
        setIsLoadingPizzas(false)
      })
    return response
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoadingPizzas ? [...new Array(6)].map(() => < Skeleton />)
                : pizzas.map(pizza =>
                  <PizzaBlock {...pizza} key={pizza.id} />
                )

            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
