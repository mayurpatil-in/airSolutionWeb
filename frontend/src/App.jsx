import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import PageTransition from "./components/PageTransition";

// Wrapper to handle AnimatePresence which needs useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          }
        />
        <Route
          path="/clients"
          element={
            <PageTransition>
              <Clients />
            </PageTransition>
          }
        />
        <Route
          path="/enquiry"
          element={
            <PageTransition>
              <Enquiry />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <FloatingContact />
    </Router>
  );
}

export default App;
