import { useLayoutEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListView from "./components/ListView";
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const appStyle = {
  backgroundColor: "black",
  flex: 1,
  height: HEIGHT,
  width: WIDTH,
  overflow: "hidden",
};



function App() {
  const [dimensions, setDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setDimensions([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div style={appStyle}>
      <Header dimensions={dimensions} />
      <ListView dimensions={dimensions} />
    </div>
  );
}

export default App;
