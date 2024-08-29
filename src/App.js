import "./index.css";
import { OrbitControls, Environment } from "@react-three/drei";
import Level from "./components/Level";
import Lights from "./components/Lights";

function App() {
  return (
    <>
      <OrbitControls />
      <Lights />

      <Level />
    </>
  );
}

export default App;
