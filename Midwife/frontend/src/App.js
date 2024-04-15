import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Header from './Component/Header';
// import Sidebar from './Component/Sidebar';
import './indexMidwife.css';
import Homemidwife from './Component/Homemidwife';
// import Updatecouple from './Component/Updatecouple'
// import HomePage from './Component/Welcome';
// import Homemiwifes from './Component/Homemidwife';
// import LoginForm from './Component/LoginForm';

//Divanka
import Allcouples from './Component/Allcouples';
import Addcouples from './Component/Addcouples';
// import EditCouple from './Component/Updatecouple';
// import ViewCouple from './Component/Viewcouple';

//Kabisek
// import AddMothers from './Component/Addmothers'
// import EditMother from './Component/Updatemother';
// import ViewMother from './Component/Viewmother';
import Allmothers from './Component/Allmothers';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<LoginForm />} /> */}
          
          {/*Midwife*/}
          <Route path="/home" element={<Homemidwife />} />
          {/*Couple*/}
          <Route path="/allcouple" element={<Allcouples />} />
          <Route path="/allmothers" element={<Allmothers />} />
          <Route path="/addcouple" element={<Addcouples />} />
          {/* <Route path="/editcouple/:id" element={<EditCouple />} />
          <Route path="/viewcouple/:id" element={<ViewCouple />} /> */}
          {/*Mother*/}
          {/* <Route path="/allmother" element={<Allmothers />} />
          <Route path="/addmother" element={<AddMothers />} />
          <Route path="/editmother/:id" element={<EditMother />} />
          <Route path="/viewmother/:id" element={<ViewMother />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
