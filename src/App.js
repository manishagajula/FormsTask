import "./App.css";
import { Form1 } from "./pages/form1";
import { Form2 } from "./pages/form2";
import { Form3 } from "./pages/form3";
import { Form4 } from "./pages/form4";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Form1 /> */}
      <Routes>
        <Route path="/" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
      </Routes>
    </div>
  );
}

export default App;
