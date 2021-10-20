
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Doctors from './component/Doctors/Doctors';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home/Home';
import Services from './component/Home/Services/Services';
import MoreInfo from './component/MoreInfo/MoreInfo';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import AuthProvider from './context/AuthProvider';
import Login from './Login/Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>

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

            <PrivateRoute path='/moreInfo/:serviceId'>
              <MoreInfo></MoreInfo>
            </PrivateRoute>

            <PrivateRoute path='/doctors'>
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>


          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
