import Form from "./CrudForm";
import Table from "./CrudTable";
import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="" element={<Form />}></Route>
            <Route path="/table" element={<Table />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
