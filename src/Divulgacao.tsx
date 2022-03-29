import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  Audio,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import { FourFaces } from "./FourFaces";
import { Gradient } from "./Gradient";

export const Template1: React.FC<{
  sources: string[];
  audio: string;
  cover: string;
}> = ({ sources, audio, cover }) => {
  const images = sources.map((i) => require("./" + i));
  const { height, fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const start = fps * 1.5;
  const startCover = 200;
  const startFrom = 150;
  const opacity = interpolate(
    frame,
    [startCover, startCover + fps * 2],
    [0, 1]
  );

  const progress = spring({
    frame: frame - startCover,
    fps,
    from: 0,
    to: 0.8,
    config: {
      mass: 2.5,
      damping: 1000,
    },
  });

  const volume = interpolate(
    frame,
    [durationInFrames - fps * 6, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <Audio src={audio} startFrom={startFrom} volume={volume} />
      <Gradient height={height} />
      {images.map((image, i) => {
        return (
          <Sequence durationInFrames={Infinity} from={start * (i + 1)}>
            <FourFaces image={image} />
          </Sequence>
        );
      })}
      <Sequence durationInFrames={Infinity} from={startCover}>
        <Img
          src={cover}
          style={{
            opacity,
            //    transform: "scale(0.8)",
            transform: `scale(${progress})`,
          }}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
