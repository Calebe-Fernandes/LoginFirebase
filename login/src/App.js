import React from 'react'
import SignUp from './components/signUp'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {AuthProvider} from './context/authContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Login from './components/login'
import PrivateRoute from './components/privateRoute'


function App() {
  return (
   
      <Container className= "d-flex align-items-center justify-content-center "
        style = {{minHeight: "100vh"}}>
        <div className="w-100" style = {{maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
                <Switch>
                  <PrivateRoute exact path = '/' component = {Dashboard} />
                  <Route path = '/signup' component = {SignUp} />
                  <Route path = '/login' component = {Login} />
                </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    
    
  );
}

export default App;
