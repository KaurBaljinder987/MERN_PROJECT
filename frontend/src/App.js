import './Styling.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRoutes from "./mainRoutes";
import { Provider } from "react-redux";
import { Store, persistor } from "./providers/Store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Router>
          <MainRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
}
export default App;
