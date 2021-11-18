import { ThemeProvider } from '@primer/components'
import { BaseStyles } from '@primer/components'
import { Route, Routes } from "react-router-dom";

import Playground from './Playground'
import ColorModeSwitcher from './ColorModeSwitcher'
import Enquiry from './Enquiry'
import Home from './Home'
import About from './About'
import Layout from './Layout'
import Editor from './Editor'

function App() {
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <ColorModeSwitcher />
                <Routes >
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="About" element={<About />} />
                        <Route path="Enquiry" element={<Enquiry />} />
                        <Route path="Playground" element={<Playground />} />
                        <Route path="Editor" element={<Editor />} />

                    </Route>
                </Routes>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
