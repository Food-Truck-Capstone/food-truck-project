import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import 'mapbox-gl/dist/mapbox-gl.css'
import {Provider} from "react-redux";
import {Manage} from "./Manage.jsx";
import {ManageMenu} from "./ManageMenu";
import {SignInForm} from "./SignInForm.jsx";


export function App({store}) {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route  path='/' element={<Home />} />
                        <Route path={"*"} element={<FourOhFour />} />
                        <Route path={"/manage-profile"} element={<Manage/>} />
                        <Route path={"/manage-menu"} element={<ManageMenu/>} />
                        <Route path={"/sign-in"} element={<SignInForm />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>

    );
}