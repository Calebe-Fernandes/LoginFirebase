import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {AuthProvider} from './context/authContext'


ReactDOM.render(
  <React.StrictMode>

    <AuthProvider>
      <Container className= "d-flex align-items-center justify-content-center "
        style = {{minHeight: "100vh"}}>
        <div className="w-100" style = {{maxWidth: '400px'}}>
          <App />
        </div>
      </Container>
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


