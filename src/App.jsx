
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';

import './scss/app.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
