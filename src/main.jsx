import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import App from './App.jsx'
import {Home} from "lucide-react";
import DayX from "@/components/DayX.jsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<App/>}/>
        <Route path='/1' element={
            <DayX
                idx={1}
            />
        }/>
        <Route path='/2' element={
            <DayX
                idx={2}
            />
        }/>
        <Route path='/3' element={
            <DayX
                idx={3}
            />
        }/>
    </Route>))


createRoot(document.getElementById('root')).render(<StrictMode>
    <RouterProvider router={router}/>
</StrictMode>,)
