// import React from "react";
// import axios from 'axios';
// import Signup from "./Componets/signup";
// import Soko from "./Componets/Soko";
// import Ghalas from "./Componets/Ghalas";
// import Homepage from "./Componets/home";
// import Blogspage from "./Componets/blogspage";
// import About from "./Componets/Semi-components/about";
// import Heroimage from "./Componets/Semi-components/hero-image";
// import Card from "./Componets/Semi-components/card";
//  import Login from "./Componets/login";
//  import Signup from "./Componets/signup";
// import Viewsoko from "./Componets/Viewsoko";
// import Masoko from "./Componets/Masoko";
// import Masokowallet from "./Componets/Masokowallet";
// import Pricereview from "./Componets/Semi-components/Pricereview";
// import MyGhalacard from "./Componets/Semi-components/myGhalacard";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       { <Navbar/> }
//       { <Login/> }
//   </div>
//   );
// }

// export default App;

// function App() {
//   const [data, setData] = useState([]);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     // Check if token exists in local storage
//     const token = localStorage.getItem('token');
//     if (token) {
//       setAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Remove token from local storage
//     localStorage.removeItem('token');
//     setAuthenticated(false);
//   };

//   const renderContent = () => {
//     if (authenticated) {
//       return (
//         <div>
//           <button onClick={handleLogout}>Logout</button>
//           <Homepage /> {/* Render the homepage component */}

//         </div>
//       );
//     }

//     return (
//       <div>
//         <Signup />
//       </div>
//     );
//   };

//   return (
//     <div>
//       {renderContent()}
//     </div>
//   );
// }

// export default App
import React from "react";
import { Routes, Route } from "react-router-dom";
import Soko from "./Componets/Soko";
import Ghalas from "./Componets/Ghalas";
import Homepage from "./Componets/home";
import Blogspage from "./Componets/blogspage";
import Login from "./Componets/login";
import Signup from "./Componets/signup";
import Masokowallet from "./Componets/Masokowallet";
import Ghaladetailview from "./Componets/ghaladetailview";
import Api from "./Componets/Semi-components/api";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/test" element={<Api />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/soko" element={<Soko />}></Route>
        <Route path="/blogs" element={<Blogspage />}></Route>
        <Route path="/ghala" element={<Ghalas />}></Route>
        <Route path="/mysoko" element={<Masokowallet />}></Route>
        <Route path="/logout" element={<Homepage />}></Route>
        <Route path="/ghalaview" element={<Ghaladetailview />}></Route>
      </Routes>
    </>
  );
}

export default App;
