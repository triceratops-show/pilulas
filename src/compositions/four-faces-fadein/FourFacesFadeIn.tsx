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

export type FourFacesFadeInProps = {
  image: string;
  audio: string;
  cover: string;

  /** what timestamp to start the photo animation from, in seconds */
  startPhotoAt: number;

  /** what timestamp to start the cover animation from, in miliseconds */
  startCoverAt: number;

  /** what timestamp to start the AUDIO from, in seconds */
  startAudioFrom: number;

  /** how many seconds should the fade out start from */
  startFadeOutFromLastNSeconds: number;
};

export const FourFacesFadeIn: React.FC<FourFacesFadeInProps> = ({
  image,
  audio,
  cover,
  startPhotoAt,
  startCoverAt,
  startAudioFrom,
  startFadeOutFromLastNSeconds,
}) => {
  const { height, fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const startPhoto = startPhotoAt * fps;
  const opacity = interpolate(
    frame,
    [startCoverAt, startCoverAt + fps * 2],
    [0, 1]
  );

  const progress = spring({
    frame: frame - startCoverAt,
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
    [durationInFrames - fps * startFadeOutFromLastNSeconds, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <Audio src={audio} startFrom={startAudioFrom} volume={volume} />
      <Gradient height={height} />
      <Sequence name="FourFaces" durationInFrames={Infinity} from={startPhoto}>
        <FourFaces image={image} />
      </Sequence>
      <Sequence name="Cover" durationInFrames={Infinity} from={startCoverAt}>
        <Img
          src={cover}
          style={{
            opacity,
            transform: `scale(${progress})`,
          }}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
