import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LearnPage } from "./pages/LearnPage/LearnPage";
import { TrendPage } from "./pages/TrendPage/TrendPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { FuturePage } from "./pages/FuturePage/FuturePage";
import ScrollToTop from "./utils/ScrollToTop";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Reset />

      <BrowserRouter>
        <ScrollToTop />
        <Header />
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
