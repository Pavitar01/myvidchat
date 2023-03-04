import { Routes, Route } from "react-router-dom";
import LoginButton from "./Auth/Login";
import Home from "./Pages/Home";
import Homepage from "./Pages/Homepage";
import Meet from "./Pages/Meet";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/" element={<LoginButton />} /> */}

          <Route path="/" element={<Homepage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/meet/:roomId" element={<Meet />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
