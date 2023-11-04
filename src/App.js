import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Contact = lazy(() => import("./pages/Contact"));
const LogIn = lazy(() => import("./pages/LogIn"));
const Register = lazy(() => import("./pages/Register"));
const PrivacyPolicy = lazy(() => import("./pages/LegalSupport/PrivacyPolicy")); ;
const AmlPolicy = lazy (() => import ("./pages/LegalSupport/AmlPolicy"))
const Terms = lazy(() => import("./pages/LegalSupport/Terms"))

function App() {

  const isMainPage = window.location.pathname === "/"
  return (
    <>
      <Router>
        {isMainPage ? <Header1 /> : <Header2 />}
        <Suspense fallback={<div>Loading .......</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/term" element={<Terms />} />
            <Route path="/aml-policy" element={<AmlPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
