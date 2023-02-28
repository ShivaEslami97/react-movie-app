import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      <div className="app-wrapper">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
