import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Dashboard, Signin } from "./pages";
import FacebookLogin from "react-facebook-login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route element={<ProtectedRoute />}>
          {/* these routes are now protected */}
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* <Route path="/create-post" element={""} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
