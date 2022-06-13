import { Link } from 'react-router-dom'
import logoSvg from '../../assets/img/pizza-logo.svg'
import { Cart } from '../../pages/Cart'

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to='/'>
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Cart />
      </div>
    </div >
  )
}
