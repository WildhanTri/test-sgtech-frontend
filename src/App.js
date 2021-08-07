import './App.css';
import Routes from './Routes';
import { UserProvider } from './stores/userProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
        </Routes>
      </UserProvider>
    </div>
  );
}

library.add(faShoppingCart)
export default App;
