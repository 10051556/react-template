
import { Route, Routes } from "react-router-dom";

import Enquiry from './Enquiry'
import Home from './Home'
import About from './About'
import Layout from './Layout'

function App() {
    return (

        <Routes >
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Enquiry" element={<Enquiry />} />


            </Route>
        </Routes>

    )
}

export default App
