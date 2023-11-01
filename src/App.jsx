import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>HomePage</p>} />
          <Route path="/dashboard" element={<p>Dashboard</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
