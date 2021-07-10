import Feed from './Feed/feed';
import Profile from './Profile/profile';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [breeds, setBreed] = useState([]);

  const fetch_cat_breeds = () => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((re) => {
        // handle success >> update 'breeds' in useState
        setBreed(
          re.data.filter(data => data.image)
        )
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  // trigger API request with 'fetch_cat_breeds' after first render
  useEffect(fetch_cat_breeds, [])

  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar expand="lg" variant="light" bg="primary">
            <Navbar.Brand>
              <Link to="/" style={{ color: "White", fontWeight: "bolder", fontSize: "26px" }}>CatStagram</Link>
            </Navbar.Brand>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Feed fact={breeds} />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
