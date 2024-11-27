import './App.css';
import Aside from './components/aside';
import NominaComponente from './components/nominaComponent';
import OrdenesCompraComponente from './components/ordenesCompraComponente';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-100">
      <BrowserRouter>
        <div className="flex">
          <Aside/>
          <body className="flex-1">
            <Routes>
              <Route path="/nomina" element={<NominaComponente />} />
              <Route path="/ordenes" element={<OrdenesCompraComponente />} />
            </Routes>
          </body>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
