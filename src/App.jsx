import { Route, Routes } from "react-router-dom";

import Tournaments from "./pages/Tournaments";
import TournamentDetail from "./pages/TournamentDetail";
import RegisterForm from "./components/RegisterForm";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";
import UserProfilePage from "./pages/UserProfilePage";
import Header from "./components/Header";
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/tournament"
          element={
            <>
              <Header />
              <Tournaments />
            </>
          }
        />

        <Route
          path="/tournament/:id"
          element={
            <>
              <Header />
              <TournamentDetail />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header />
              <UserProfilePage />
            </>
          }
        />

         <Route
          path="/payment"
          element={
            <>
              <Header />
              <PaymentPage />
            </>
          }
        />
      </Route>

      

    
    </Routes>
  );
}

export default App;