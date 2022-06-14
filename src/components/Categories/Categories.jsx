
export const Categories = ({ activeCategory, onClickCategory }) => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <div className="categories">
      <ul>
        {

          categories.map((categoryName, index) =>
            <li onClick={() => onClickCategory(index)} key={categoryName} className={activeCategory === index ? 'active' : ''}>
              {categoryName}
            </li>
          )
        }
      </ul>
    </div>
  )
}
