
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Doctors from './component/Doctors/Doctors';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home/Home';
import Services from './component/Home/Services/Services';
import MoreInfo from './component/MoreInfo/MoreInfo';
import Register from './component/Register/Register';
import Login from './Login/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>

          <Route path='/moreInfo/:serviceId'>
            <MoreInfo></MoreInfo>
          </Route>

          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>


        </Switch>

        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
