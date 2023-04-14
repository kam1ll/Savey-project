import React, {useState, useEffect} from 'react'
import '../App.css'

import {collection, getDocs} from "firebase/firestore";
import {db} from '../firebase.js'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import IncomesOutcomes from "./Incomes-outcomes.jsx";
import AnalysisBalance from "./Analysis-balance.jsx";
import Savings from "./Savings.jsx";
import Finances from "./Finances.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/incomes-outcomes" element={<IncomesOutcomes/>} />
                <Route path="finances" element={<Finances/>} />
                <Route path="savings" element={<Savings/>} />
                <Route path="analysis-balance" element={<AnalysisBalance/>} />
            </Routes>
        </BrowserRouter>
    );
}




export default App

