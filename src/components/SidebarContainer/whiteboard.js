import { ReactSketchCanvas } from "@shawngoh87/react-sketch-canvas";
import { usePubSub } from "@videosdk.live/react-sdk";
export const WhiteboardView = () => {
  //We will define a refernce for our canvas
  const canvasRef = useRef();

  //We will define the props required by the canvas element that we are using
  const canvasProps = {
    width: "100%",
    height: "500px",
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg",
    preserveBackgroundImageAspectRatio: "none",
    strokeWidth: 4,
    eraserWidth: 5,
    strokeColor: "#000000",
    canvasColor: "#FFFFFF",
    allowOnlyPointerType: "all",
    withViewBox: false,
  };
  return (
    <div>
      <ReactSketchCanvas ref={canvasRef} {...canvasProps} />
    </div>
  );
};
