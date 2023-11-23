import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LearnPage } from "./pages/LearnPage/LearnPage";
import { TrendPage } from "./pages/TrendPage/TrendPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { FuturePage } from "./pages/FuturePage/FuturePage";

function App() {
  return (
    <div>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/trend" element={<TrendPage />} />
          <Route path="/future" element={<FuturePage />} />
          <Route path="/learn" element={<LearnPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
