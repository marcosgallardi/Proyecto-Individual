import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { FormPage } from "./Pages/FormPage/FormPage";
import { DetailPage } from "./Pages/DetailPage/DetailPage";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../src/redux/actions";

function App() {

  const dispatch = useDispatch();

  dispatch(getTemperaments());

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
