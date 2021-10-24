import React from 'react';
import './App.css';
import Nav from './Nav';
import App from './App';
import About   from './About';
import Shop from './Shop';
import ItemDetails from './ItemDetails'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BrowserRouter from 'react-router-dom/BrowserRouter'



const Routes = () => {
    return(
            <BrowserRouter  basename={process.env.PUBLIC_URL}>
             <div>
            <Nav />
       <Switch>     
<Route exact path="/" component={App}/>
<Route exact path="/about" component={About}/>
<Route exact path="/shop" component={Shop}/>
<Route path="/shop/:id" component={ItemDetails}/>
</Switch>
</div>
</BrowserRouter>
    )
}
export default Routes;
