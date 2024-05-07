import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './Component/Welcome';
// import Homemiwifes from './Component/Homemidwife';

import LoginFormPhi from './Component/phi/LoginFormMidwife';

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
import PhiProfile from './Component/phi/phiProfile/phiProfile.js';
import InfectiousPatientsReport from "./Component/phi/DiseaseManagement/DMReports/InfectiousPatientReport/InfectiousPatientsReport";
import { useRef } from "react";
import AwarenessSessionPDF from "./Component/phi/DiseaseManagement/PDF/AwarenessSessionPDF.js";
import ReportHomeDM from "./Component/phi/DiseaseManagement/DiseaseManagementReport/ReportHomeDM.js";
import PhiHome from './Component/phi/PhiHome/PhiHome.js';
//phi reports
import DiseaseListReport from './Component/phi/DiseaseManagement/DMReports/DiseasePDF/DiseasePDF.js';
// import PieCharts from './Component/phi/DiseaseManagement/DiseaseManagementReport/PieCharts/PieCharts.js'
import CreateMessage from './Component/phi/DiseaseManagement/Message/CreateMessage.js';
import DisplaYMessagePHI from './Component/phi/DiseaseManagement/Message/DisplaYMessagePHI.js';
import DisplayMessageRecipeint from './Component/phi/DiseaseManagement/Message/DisplayMessageRecipeint.js';


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
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
        <Route path="/profile" element={<PhiProfile />} />

        <Route path="/createmessage" element={<CreateMessage />} />
        <Route path="/sent/messages" element={<DisplaYMessagePHI />} />
        <Route path="/received/messages" element={<DisplayMessageRecipeint />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
