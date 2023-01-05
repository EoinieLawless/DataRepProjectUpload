import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//importing the views of pages
import { Mainpage } from './views/Mainpage';
import { Stock } from './views/Stock';
import { Contribute } from './views/contribute';
import { Edit } from './views/edit';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.8vAfsH79CE-H2iqXNnT3MwHaDn&pid=Api&P=0"
                  width="50"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="/">FarmersMarket.ie</Navbar.Brand>


              <Nav className="me-auto">
                <Nav.Link href="/">Info-Hub</Nav.Link>
                <Nav.Link href="/Stock">Stock</Nav.Link>
                <Nav.Link href="/contribute">Contribute</Nav.Link>
              </Nav>

              <Navbar.Brand href="/">
            Time: {new Date().toLocaleTimeString()}
          </Navbar.Brand>

            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Mainpage></Mainpage>}></Route>
            <Route path='/Stock' element={<Stock></Stock>}></Route>
            <Route path='/Contribute' element={<Contribute></Contribute>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          </Routes>



        </div>
      </Router>
    );
  }
}

export default App;
