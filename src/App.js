import './App.css';
import Routes from './routes';
import {UserProvider} from './context/userContext';
import { ProductProvider } from './context/productContext';
import CarritoDeCompras from './views/CarritoDeCompras/CarritoDeCompras';

function App() {
  return (
    <>
    <UserProvider>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </UserProvider>
    </>
  );
}

export default App;