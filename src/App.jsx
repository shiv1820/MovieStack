import "./css/App.css";
import MovieCard from "./components/movieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  // const movieNumber = 2;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

// function App() {
//   // const movieNumber = 2;

//   return (
//     <>
//       {/* {movieNumber === 1 ? (
//         <MovieCard movie={{ title: "Tirth's Film", release_date: "2024" }} />
//       ) : (
//         <MovieCard movie={{ title: "Tim's Film", release_date: "2025" }} />
//       )} */}

//       <Home />
//     </>
//   );
// }
// function Text({ name }) {
//   return (
//     <div>
//       <p>HELLO {name}</p>
//     </div>
//   );
// }
