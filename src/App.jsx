import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OwnerDashboard from "./pages/OwnerDashboard";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Projects from "./pages/Projects";
import People from "./pages/People";
import WorkerRegistration from "./pages/WorkerRegistration";
import SiteRegistration from "./pages/SiteRegistration";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import ProjectDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/register-worker"
          element={
            <ProtectedRoute allowedRoles="owner">
              <WorkerRegistration />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register-site"
          element={
            <ProtectedRoute allowedRoles="owner">
              <SiteRegistration />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner"
          element={
            <ProtectedRoute allowedRoles="owner">
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute allowedRoles="owner">
              <Projects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/people"
          element={
            <ProtectedRoute allowedRoles="owner">
              <People />
            </ProtectedRoute>
          }
        />

        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
