// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './Component/Header';
// import Sidebar from './Component/Sidebar';
// import Allcouples from './Component/Allcouples';
// import Addcouples from './Component/Addcouples';
// import './indexMidwife.css';
// import Homemidwife from './Component/Homemidwife';
// import ViewCouple from './Component/Viewcouple';
// import Allmothers from './Component/Allmothers';
// import EditCouple from './Component/Updatecouple';
// import HomePage from './Component/Welcome';

// const AppMidwife = () => {
//   return (

//     <BrowserRouter>
//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
//             <div className="position-sticky pt-3 sidebar-sticky">
//               <Sidebar />
//               <Routes>
//                 <Route path="/allcouple" element={<Allcouples />} />
//                 <Route path="/addcouple" element={<Addcouples />} />
//                 <Route path="/allmothers" element={<Allmothers />} />
//               </Routes>
//             </div>
//           </div>
//           {/* Header */}
//           <Header />
//           {/* Main Content */}
//           <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//             <Routes>
//               <Route path="/allmothers" element={<Allmothers />} />
//               <Route path="/home" element={<Homemidwife />} />
//               <Route path="/allcouple" element={<Allcouples />} />
//               <Route path="/addcouple" element={<Addcouples />} />
//               <Route path="/editcouple/:id" element={<EditCouple />} />
//               <Route path="/viewcouple/:id" element={<ViewCouple />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
      
//     </BrowserRouter>
//   );
// }

// export default AppMidwife;
