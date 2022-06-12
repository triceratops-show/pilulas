import { useState } from "react";
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Img,
  // interpolate,
  // useCurrentFrame,
} from "remotion";

export type ScalingFaceProps = {
  image: string;
};

export const ScalingFace: React.FC<ScalingFaceProps> = ({ image }) => {
  const [handle] = useState(() => delayRender());
  // const frame = useCurrentFrame();
  // const progress = interpolate(frame, [0, 120], [0, 1], {
  //   extrapolateRight: "clamp",
  // });
  // const scale = interpolate(progress, [0, 1], [1.2, 1.3]);
  // const translateX = interpolate(progress, [0, 1], [0, 30]);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Img
        src={image}
        style={{
          position: "absolute",
          height: "100%",
        }}
        onLoad={() => continueRender(handle)}
        onError={() => continueRender(handle)}
      />
    </AbsoluteFill>
  );
};
