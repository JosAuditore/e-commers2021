import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/Home/Home';
import Signup from '../views/Singup/Signup';
import Login from '../views/Login/Login';
import Item from '../views/Item/Item';
import Profile from '../views/Profile/Profile';
import Navbar from '../components/Navbar';
import { useUserContext } from '../context/userContext';
import SearchPage from '../views/SearchPage/SearchPage';
import CarritoDeCompras from '../views/CarritoDeCompras/CarritoDeCompras';

const Logout = () => {
    window.localStorage.removeItem('token'); //Aquí solamente remueve el token
    const context = useUserContext(); // crea una variable context para usar el useUserContext
    context.setUsuarioActual(); // cambia el estado del UsuarioActual a vacio
    return <Redirect to="/" />
}

export default function Routes() {
    return(
        <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/item" component={Item} />
            <Route exact path="/carritodecompras" component={CarritoDeCompras}/>
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search" component={SearchPage} />
            <Route path="/item/:id" component={Item} />
        </Switch>
    </Router>
    );
}