import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location,
} from "./pages";

//restaurant code starts
// import restaurant from "./restaurant.jpg";

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   );
// }

// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around.</p>
//       <img
//         alt="napkin and silverware at a restaurant table"
//         height={200}
//         src={restaurant}
//       />
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// function Footer(props) {
//   return (
//     <footer>
//       <p>Copyright {props.year}</p>
//     </footer>
//   );
// }

// const dishes = [
//   "Macaroni and Cheese",
//   "Salmon",
//   "Tofu with vegetables",
//   "Minestrone",
// ];

// const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
//restaurant code ends here

//https://api.github.com/users/Riyankakundu

// function App({ login }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!login) return;
//     setLoading(true);
//     fetch(`https://api.github.com/users/${login}`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, [login]);

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   }

//   if (!data) {
//     return null;
//   }

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );

  // return (
  // <div className="App">
  //   <Header name="Riyanka" />
  //   <Main adjective="amazing" dishes={dishObjects} />
  //   <Footer year={new Date().getFullYear()} />
  // </div>
  // );
}

export default App;
