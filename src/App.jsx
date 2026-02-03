import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import ServiceDetails from './pages/ServiceDetails';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/quote" element={<Quote />} />
            </Routes>
        </Layout>
    );
}

export default App;
