import { HomePage } from "./components/Home";
import '@coreui/coreui/dist/css/coreui.min.css'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes> 

                <Route path="/" element={<HomePage/>}/>
               
            </Routes>
    </div>
  );
}

export default App;
