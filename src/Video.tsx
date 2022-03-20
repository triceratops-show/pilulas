import { Composition } from "remotion";
import { AudiogramComposition } from "./Composition";
import "./fonts.css";
import "./style.css";

const fps = 30;
//const durationInFrames = 30 * fps;
const durationInFrames = 18 * fps;

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="Audiogram"
        component={AudiogramComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />
    </>
  );
};
