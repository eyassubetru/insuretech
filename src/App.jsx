import { Route, Routes } from "react-router-dom";


import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";

import Header from "./components/Header";
import CustomerHomePage from "./components/customer_home_page";
import PoliciesPage from "./pages/PoliciesPage";
import  Quote  from "./pages/Quote";
import LifeInsurance from "./pages/LifeInsurance";

import LoadingScreen from "./components/LoadingScreen";
import MotorInsurance from "./pages/MotorInsurance";
function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <CustomerHomePage />
            </>
          }
        />
        <Route
          path="/policies"
          element={
            <>
              <Header />
              <PoliciesPage />
            </>
          }
        />

        <Route
          path="/quote"
          element={
            <>
              <Header />
              <Quote />
            </>
          }
        />

        <Route
          path="/life-insurance"
          element={
            <>
              <Header />
              <LifeInsurance />
            </>
          }
        />


         <Route
          path="/motor-insurance"
          element={
            <>
              <Header />
              <MotorInsurance />
            </>
          }
        />
      </Route>
    
    </Routes>
  );
}

export default App;