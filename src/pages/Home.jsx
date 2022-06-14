import axios from "axios"
import { useEffect, useState } from "react"
import { Categories } from "../components/Categories/Categories"
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock"
import Skeleton from "../components/Skeleton/Skeleton"
import { Sort } from "../components/Sort/Sort"


export const Home = () => {
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
    window.scrollTo(0, 0);
    return response
  }
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoadingPizzas ? [...new Array(6)].map((_, index) => < Skeleton key={index} />)
              : pizzas.map(pizza =>
                <PizzaBlock {...pizza} key={pizza.id} />
              )

          }
        </div>
      </div>
    </>
  )
}
