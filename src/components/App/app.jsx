import "./app.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/header.jsx";
import Main from "../Main/main.jsx";
import Footer from "../Footer/footer.jsx";
import Register from "../Register/register.jsx";
import Login from "../Login/login.jsx";
import Profile from "../Profile/profile.jsx";
import Movies from "../Movies/movies.jsx";
import SavedMovies from "../SavedMovies/savedmovies.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="*">
          <Header isLoggedIn={true} />

          <Routes>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="*">
              <Routes>
                <Route exact path="/">
                  <Main />
                </Route>

                <Route path="/movies">
                  <Movies />
                </Route>

                <Route path="/saved-movies">
                  <SavedMovies />
                </Route>
              </Routes>
              <Footer />
            </Route>
          </Routes>
        </Route>
      </Routes>
    </div>
  );
}
