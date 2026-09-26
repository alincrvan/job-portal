import { Route, Routes } from "react-router-dom";
import DataProvider from "./context/DataContext";
import Home from "./pages/Home";
import JobForm from "./pages/JobForm";
import JobPage from "./pages/JobPage";
import Layout from "./pages/Layout";
import Missing from "./pages/Missing";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="" element={<Home />} /> 
            <Route path="jobs">
              <Route path=":id" element={<JobPage />} />
              <Route path=":id/apply" element={<JobForm />} />
            </Route>
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
