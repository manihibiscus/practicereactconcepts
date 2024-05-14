import {Route, Switch} from "react-router-dom";
import { HomePage } from "./components/HomePage";

const RoutApp = () =>{
  <Switch>
    <Route
    exact path='/'
    Component={HomePage} 
    />

  </Switch>
}

export default RoutApp;

