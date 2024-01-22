import RandomUser from "./RandomUser";
import Unmounted from "./Unmounted";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Unmounted />} />
        <Route path="/mount" element={<RandomUser />} />
      </Routes>
    </>
  );
}
export default App;
