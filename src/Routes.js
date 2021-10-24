import React from 'react';
import './App.css';
import Nav from './Nav';
import App from './App';
import About   from './About';
import Shop from './Shop';
import { BrowserRouter, Switch, Route } from "react-router-dom";


const Routes = () => {
    return(
            <BrowserRouter>
             <div>
            <Nav />
       <Switch>     
<Route exact path="/" component={App}/>
<Route exact path="/about" component={About}/>
<Route exact path="/shop" component={Shop}/>
</Switch>
</div>
</BrowserRouter>
    )
}
export default Routes;