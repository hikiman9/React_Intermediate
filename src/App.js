import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import data from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {

  let [members, setMembers] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="black" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>HIKISHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg"></div>
            <div class="container text-center">
              <div class="row">
                {
                  members.map(function (a, i) {
                    return (
                      <Characters member={members[i]} />
                    );
                  })
                }
              </div>
            </div>
            <Button variant="secondary" size="sm" onClick={() => {
              let copy = [...members];
              copy.sort(function(a, b){
                if(a.title < b.title) return -1; 
                if(a.title > b.title) return 1; 
                if(a.title === b.title) return 0; 
              })
              setMembers(copy);
            }}>
              Small button
            </Button>
          </>
        } />
        <Route path='/detail/:id' element={<Detail members={members} />} />
      </Routes>
    </div>
  );
}

function Characters(props) {
  return (
    <div class="col-md-4">
      <img src={process.env.PUBLIC_URL + `/myImg/prod${props.member['id'] + 1}.png`} width='100%' alt={props.member.title} />
      <h4>{props.member["title"]}</h4>
      <p>{props.member["content"]}</p>
    </div>
  );
};

export default App;
