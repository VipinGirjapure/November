import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header.jsx/Header";
import Template2Editing from "./Components/Template2Editing/Template2Editing";
import TemplateEditing from "./Components/TemplateEditing/TemplateEditing";
import ChooseTemplate from "./Pages/ChooseTemplatePage/ChooseTemplate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ChooseTemplate />} />
          <Route path="/editing/template1" element={<TemplateEditing />} />
          <Route path="/editing/template2" element={<Template2Editing />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
