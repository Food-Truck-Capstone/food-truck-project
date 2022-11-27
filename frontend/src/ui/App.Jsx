import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import 'mapbox-gl/dist/mapbox-gl.css'
import {CustomerSignUp} from "./CustomerSignUp";
import {ManageProfile} from "./ManageProfile";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={"/customer-signup"} element={<CustomerSignUp />} />
                    <Route path={"/manage-profile"} element={<ManageProfile/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}