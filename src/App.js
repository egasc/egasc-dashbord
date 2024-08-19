import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext, FirebaseContext } from "./contexts/myContext";
// pages
import LeaderPage from "./Pages/LeaderPage";
import MemberPage from "./Pages/MemberPage";
import GamesPage from "./Pages/GamesPage";
import AdminPage from "./Pages/AdminPage";
import Pagenotfound from "./Components/404/Pagenotfound";
import AddmemberPage from "./Pages/AddmemberPage";
import Loggin from "./Components/loggin/Loggin";

/*
=====Import Components=====
*/

function App() {
  const {setUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const { app } = useContext(FirebaseContext);
  const auth = getAuth(app);
  // loggin cookies save here
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  // Another Method
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });

  //   return unsubscribe; // 
  // },[]);
  console.log(user);
  if (user) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="*" exact element={<Pagenotfound />} />
            <Route path="/" exact element={<LeaderPage />} />
            <Route path="/Members" element={<MemberPage />} />
            <Route path="/Games" element={<GamesPage />} />
            <Route path="/Admin" element={<AdminPage />} />
            <Route path="/Members/Addmember" element={<AddmemberPage />} />
            <Route path="*" exact element={<Pagenotfound />} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <Routes>
          <Route path="/" exact element={<Loggin/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;




















// import React, { useEffect, useContext } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { AuthContext, FirebaseContext } from "./contexts/myContext";

// import LeaderPage from "./Pages/LeaderPage";
// import MemberPage from "./Pages/MemberPage";
// import GamesPage from "./Pages/GamesPage";
// import AdminPage from "./Pages/AdminPage";
// import Pagenotfound from "./Components/404/Pagenotfound";
// import AddmemberPage from "./Pages/AddmemberPage";
// import Loggin from "./Components/loggin/Loggin";

// /*
// =====Import Components=====
// */

// function App() {
//   const {setUser } = useContext(AuthContext);
//   const { app } = useContext(FirebaseContext);
//   const { logedin } = useContext(AuthContext);
//   const auth = getAuth(app);
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });
//   });
  
//   if (logedin) {
//     return (
//       <div>
//         <Router>
//           <Routes>
//             <Route path="*" exact element={<Pagenotfound />} />
//             <Route path="/" exact element={<LeaderPage />} />
//             <Route path="/Members" element={<MemberPage />} />
//             <Route path="/Games" element={<GamesPage />} />
//             <Route path="/Admin" element={<AdminPage />} />
//             <Route path="/Members/Addmember" element={<AddmemberPage />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Router>
//           <Routes>
//           <Route path="*" exact element={<Pagenotfound />} />
//           <Route path="/" exact element={<Loggin/>} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;

