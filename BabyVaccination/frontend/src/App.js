import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Allbabies from './Component/Allbabies';
import AddBabies from './Component/Addbabies';
import ViewBaby from './Component/Viewbaby';
import EditBaby from './Component/updatebaby';




function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
         
          <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
              
            </div>
          </div>
          {/* Header */}
          <Header/>
          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/allbaby" element={<Allbabies />} />
              <Route path="/addbaby" element={<AddBabies />} />
              <Route path="/viewbaby/:id" element={<ViewBaby/>}/>
              <Route path="/editbaby/:id" element={<EditBaby/>}/>
         
           
             
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
