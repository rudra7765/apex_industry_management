import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollTop from "./components/ScrollTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollTop />

            <Routes>

                <Route path='/' element={<MainLayout />}>

                    <Route path="/" element={<Home />} />

                    {/* <Route path="/about" element={<About />} />

                    <Route path="/products" element={<Products />} />

                    <Route path="/services" element={<Services />} />

                    <Route path="/industries" element={<Industries />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/contact" element={<Contact />} /> */}

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;