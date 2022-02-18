import './App.css';
import Bootstrap from './components/Bootstrap/Bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Resources from './components/Resources/Resources';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Routing from './components/Routing/Routing';
import {AuthProvider} from './contexts/AuthContext'
import Login from './components/Auth/Login';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navigation />
      <HashRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Resources} />
          <PrivateRoute path="/resources" component={Resources} />
          <PrivateRoute path="/categories" component={Categories} />
          <Route path="/bootstrap" component={Bootstrap} />
          <Route path="/routing" component={Routing} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
      </AuthProvider>
      <Footer/>
    </div>    
  );
}

export default App;
