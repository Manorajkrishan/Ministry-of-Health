import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Header from './Component/midwife/Header';
// import Sidebar from './Component/midwife/Sidebar';
// import './indexMidwife.css';
import Homemidwifes from './Component/midwife/Homemidwife';
import HomePage from './Component/Welcome';
// import Homemiwifes from './Component/Homemidwife';
import LoginFormMidwife from './Component/midwife/LoginFormMidwife';
import LoginFormDoctor from './Component/doctor/LoginFormDoctor';
import LoginFormPhi from './Component/phi/LoginFormMidwife';
//Divanka
import Allcouples from './Component/midwife/couple/Allcouples';
import Addcouples from './Component/midwife/couple/Addcouples';
import EditCouple from './Component/midwife/couple/Updatecouple';
import ViewCouple from './Component/midwife/couple/Viewcouple';

//Kabisek
import AddMothers from './Component/midwife/mother/Addmothers'
import EditMother from './Component/midwife/mother/Updatemother';
import ViewMother from './Component/midwife/mother/Viewmother';
import Allmothers from './Component/midwife/mother/Allmothers';

//Krishan
import HealthHome from './Component/doctor/student/HealthHome';
import MohHome from './Component/doctor/MohHome';
import AddRecords from './Component/doctor/student/AddRecords';
import ViewStudent from './Component/doctor/student/Viewst';
import EditDetail from './Component/doctor/student/EditDetail';

//Fasnas
import Allbabies from './Component/midwife/baby/Allbabies';
import AddBabies from './Component/midwife/baby/Addbabies';
import EditBaby from './Component/midwife/baby/updatebaby';
import ViewBaby from './Component/midwife/baby/Viewbaby';
import Register from './Component/midwife/Register.js';

//Sayumi
import AllVaccines from './Component/doctor/vaccine/AllVaccine';
import Addvaccines from './Component/doctor/vaccine/Addvaccines';
import EditVaccine from './Component/doctor/vaccine/Updatevaccine';
import ViewVaccine from './Component/doctor/vaccine/Viewvaccine';

// import Homemiwifes from './Component/Homemidwife';


// chemini
import Add from "./Component/phi/DiseaseManagement/Diseases/AddDisease/Add";
import AddAwarenessSession from './Component/phi/DiseaseManagement/AwarenessSession/addAwarenessSession.js';
import ViewDisease from './Component/phi/DiseaseManagement/Diseases/ViewDiseases/ViewDisease.js';
import ListOfDiseases from "./Component/phi/DiseaseManagement/Diseases/ListOfDiseases/ListOfDiseases";
import UpdateDiseases from "./Component/phi/DiseaseManagement/Diseases/UpdateDiseases/UpdateDiseases";
import AddPatient from "./Component/phi/DiseaseManagement/Patient/AddPatient/AddPatient";
import UpdatePatient from "./Component/phi/DiseaseManagement/Patient/UpdatePatient/UpdatePatient";
import UpdateAwarenessSession from "./Component/phi/DiseaseManagement/AwarenessSession/UpdateAwarenessSession/updateAwarenessSession";
import ListAwarenessSession from "./Component/phi/DiseaseManagement/AwarenessSession/DisplayAwarenessSession/ListAwarenessSessionAdmin.js";
import DMsideNav from "./Component/phi/DiseaseManagement/DMNav/DMsideNav";
import ListOfPatients from "./Component/phi/DiseaseManagement/Patient/ListOfPatients/ListOfPatients";
import ViewPatientInfo from "./Component/phi/DiseaseManagement/Patient/ViewPatientInfo/ViewPatientInfo.js";
// import PhiProfile from './Component/phi/phiProfile/phiProfile.js';
import InfectiousPatientsReport from "./Component/phi/DiseaseManagement/DMReports/InfectiousPatientReport/InfectiousPatientsReport";
import { useRef } from "react";
import AwarenessSessionPDF from "./Component/phi/DiseaseManagement/PDF/AwarenessSessionPDF.js";
import ReportHomeDM from "./Component/phi/DiseaseManagement/DiseaseManagementReport/ReportHomeDM.js";

//phi reports
import DiseaseListReport from './Component/phi/DiseaseManagement/DMReports/DiseasePDF/DiseasePDF.js';
// import PieCharts from './Component/phi/DiseaseManagement/DiseaseManagementReport/PieCharts/PieCharts.js'
import CreateMessage from './Component/phi/DiseaseManagement/Message/CreateMessage.js';
import DisplaYMessagePHI from './Component/phi/DiseaseManagement/Message/DisplaYMessagePHI.js';
import DisplayMessageRecipeint from './Component/phi/DiseaseManagement/Message/DisplayMessageRecipeint.js';
// import LoginFormPhi from './Component/phi/LoginFormMidwife';
//Nikeshi
import AddFactory from "./Component/phi/FactoryManagement/AddFactory/AddFactory.js";
import AddOtherRemarks from "./Component/phi/FactoryManagement/AddFactory/AddOtherRemarks.js";
import FactoryDisplay from "./Component/phi/FactoryManagement/FactoryDisplay/FactoryDisplay.js";
import UpdateFactory from "./Component/phi/FactoryManagement/UpdateFactory/UpdateFactory.js";
import ViewFactory from "./Component/phi/FactoryManagement/ViewFactory/ViewFactory.js";

import Tests from './Component/phi/FactoryManagement/tests.js';
//  <Route path="/factory/viewFactory" element={<ViewFactory />} />

// dewmini
import Viewstudent from "./Component/phi/StudentManagement/Viewstudent.js";
import Viewschool from "./Component/phi/StudentManagement/Viewschool.js";
import AddSchool from "./Component/phi/StudentManagement/Addschool";
import Addstudent from "./Component/phi/StudentManagement/Addstudent";
import AllSchool from "./Component/phi/StudentManagement/Allschool";
import Allstudent from "./Component/phi/StudentManagement/Allstudent";

import Editstudent from "./Component/phi/StudentManagement/Editstudent";
import Editschool from "./Component/phi/StudentManagement/Editschool.js"
import PhiHome from "./Component/phi/PhiHome/PhiHome.js";
import StudentReport from './Component/phi/StudentManagement/StudentReport.js';
import Dashboard from './Component/phi/StudentManagement/Dashboard.js';


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/loginMidwife" element={<LoginFormMidwife />} />
          <Route path="/loginDoctor" element={< LoginFormDoctor/>} />
          <Route path="/PhiLogin" element={< LoginFormPhi/>} />
          <Route path="/logout" element={<LoginFormMidwife />} />

          <Route path="/logoutdoctor" element={<LoginFormDoctor />} />
          
          {/*Midwife*/}
          <Route path="/home" element={<Homemidwifes />} />
          {/*Doctor*/}
          <Route path="/homedoctor" element={<HealthHome />} />
         
          {/*Divanka*/}
          <Route path="/allcouple" element={<Allcouples />} />
          <Route path="/allmothers" element={<Allmothers />} />
          <Route path="/addcouple" element={<Addcouples />} />
          <Route path="/editcouple/:id" element={<EditCouple />} />
          <Route path="/viewcouple/:id" element={<ViewCouple />} />

          {/*Kabisek*/}
          <Route path="/allmother" element={<Allmothers />} />
          <Route path="/addmother" element={<AddMothers />} />
          <Route path="/editmother/:id" element={<EditMother />} />
          <Route path="/viewmother/:id" element={<ViewMother />} />

          {/*Krishan*/}
          <Route path="/doctorhome" element={<MohHome />} />
          <Route path="/AddRecords" element={<AddRecords />} />
          <Route path="/getstud/:id" element={<ViewStudent />} />
          <Route path="/updatestud/:id" element={<EditDetail />} />
          <Route path="/homedoctor" element={<HealthHome />} />

          {/*Fasnas*/}
          <Route path="/allbaby" element={<Allbabies />} />
          <Route path="/addbaby" element={<AddBabies />} />
          <Route path="/editbaby/:id" element={<EditBaby />} />
          <Route path="/viewbaby/:id" element={<ViewBaby/>}/>
          <Route path="/regi" element={<Register/>}/>


          {/*Sayumi*/}
          <Route path="/allvaccine" element={<AllVaccines />} />
          <Route path="/homevaccine" element={<AllVaccines />} />
          <Route path="/addvaccine" element={<Addvaccines />} />
          <Route path="/editvaccine/:id" element={<EditVaccine />} />
          <Route path="/viewvaccine/:id" element={<ViewVaccine />} />
          
 <Route path="/" element={<HomePage />} />

        <Route path="/PhiLogin" element={< LoginFormPhi />} />


        <Route path="/" element={<HomePage />} />

<Route path="/PhiLogin" element={< LoginFormPhi />} />



{/* disease Management:Chemini */}
<Route path="/PHI/home" element={<PhiHome />} />
<Route path="/disease/add" element={<Add />} />
<Route path="/disease/list" element={<ListOfDiseases />} />
<Route
  path="/disease/update/:id"
  element={<UpdateDiseases />}
/>

<Route
  path="/AwarenessSession/add"
  element={<AddAwarenessSession />}
/>
<Route
  path="/AwarenessSession/update/:id"
  element={<UpdateAwarenessSession />}
/>
<Route
  path="/AwarenessSession/display"
  element={<ListAwarenessSession />}
/>

<Route path="/patient/add" element={<AddPatient />} />
<Route path="/patient/update/:id" element={<UpdatePatient />} />
<Route path="/patients/list" element={<ListOfPatients />} />
<Route
  path="/patient/detailed/:id"
  element={<ViewPatientInfo />}
/>

<Route
  path="/InfectiousDiseaseList/pdf"
  element={<InfectiousPatientsReport />}
/>
<Route
  path="/documents/awarenessSession"
  element={<AwarenessSessionPDF />}
/>
<Route
  path="/documents/disease"
  element={<DiseaseListReport />}
/>
<Route path="/disease/viewmore" element={<ViewDisease />} />
<Route path="/dm/report" element={<ReportHomeDM />} />


<Route path="/createmessage" element={<CreateMessage />} />
<Route path="/sent/messages" element={<DisplaYMessagePHI />} />
<Route path="/received/messages" element={<DisplayMessageRecipeint />} />
<Route path ="/phi/logout" element ={<LoginFormPhi/>}/>

{/* nikeshi */}
<Route path="/test" element={<Tests />} />
<Route path="/editfactory/:id" element={<UpdateFactory />} />

<Route path="/remark" element={<AddOtherRemarks />} />
<Route path="/factory/add" element={<AddFactory />} />
<Route path="/factory/display" element={<FactoryDisplay />} />

<Route path="/viewfactory/:id" element={<ViewFactory />} />
                {/* school ;Dewmini
                 */}
                <Route path="/allstud" element={<Allstudent />} />
                <Route path="/addstud" element={<Addstudent />} />
                <Route path="/editstud/:id" element={<Editstudent />} />
                <Route path="/viewstud/:id" element={<Viewstudent />} />
                <Route path="/addschool" element={<AddSchool />} />
                <Route path="/viewschool/:id" element={<Viewschool />} />
                <Route path="/editschool/:id" element={<Editschool />} />
                <Route path="/allschool" element={<AllSchool />} />
                <Route path="/studreport" element={<StudentReport />} />
               
              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
