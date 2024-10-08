import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext, FirebaseContext } from "./contexts/myContext";
// pages
import Postpage from "./Pages/Postpage";
import MemberPage from "./Pages/MemberPage";
import GamesPage from "./Pages/GamesPage";
import AdminPage from "./Pages/AdminPage";
// import Pagenotfound from "./Components/404/Pagenotfound";
import AddmemberPage from "./Pages/AddmemberPage";
import Loggin from "./Components/loggin/Loggin";
import Cookies from "js-cookie";
/*
=====Import Components=====
*/

function App() {
  const { setUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const { app } = useContext(FirebaseContext);

  if (user) {
    Cookies.set("myData", true, { expires: 7 }); // The cookie expires in 7 days
  }
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
  console.log(Cookies.get('myData'));
  if (user || Cookies.get('myData')==='true') {
    return (
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route path="*" exact element={<Postpage />} />
            <Route path="/egasc-dashbord/" exact element={<Postpage />} />
            <Route path="/egasc-dashbord/Members" element={<MemberPage />} />
            <Route path="/egasc-dashbord/Games" element={<GamesPage />} />
            <Route path="/egasc-dashbord/Admin" element={<AdminPage />} />
            <Route
              path="/egasc-dashbord/Members/Addmember"
              element={<AddmemberPage />}
            />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="*" exact element={<Loggin />} />
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
