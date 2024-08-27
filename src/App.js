// import React from "react";
// import Sidebar from "./Sidebar";
// import MainContent from "./MainContent"; // Path to your Sidebar component

// const App = () => {
//   return (
//     <div>
//       <div>
//         <Sidebar />
//       </div>
//       <div>
//         <MainContent />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar style={{ flex: "0 0 250px" }} />
      <MainContent style={{ flex: 1, padding: "20px" }} />
    </div>
  );
};

export default App;