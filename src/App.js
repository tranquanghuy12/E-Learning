
import './App.css';
import { createBrowserHistory } from "history";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Profile from './pages/Profile/Profile';
import {Router,Switch} from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './pages/Register/Register';
import UpdateUserInfo from './pages/UpdateUserInfo/UpdateUserInfo';




export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
    <Switch>
      <HomeTemplate path="/home" exact Component={Home} />
      <HomeTemplate path="/profile" exact Component={Profile} />

      <UserTemplate path="/login" exact Component={Login} />
      <UserTemplate path="/register" exact Component={Register} />
      
      
      <HomeTemplate path="/" exact Component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
