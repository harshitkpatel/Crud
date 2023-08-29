import Component4 from "./Component4";
import Component2 from "./Component2";
import Component3 from "./Component3";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component2 />}>
            <Route index element={<Component3 />}></Route>
            <Route path="/component4" element={<Component4 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
