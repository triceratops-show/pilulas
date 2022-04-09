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
import styles from "./Template2.module.scss";
import "./load-fonts";

export const Template2: React.FC<{
  image: string;
  audio: string;
  cover: string;

  /** what timestamp to start the photo animation from, in seconds */
  startPhotoAt: number;

  /** what timestamp to start the cover animation from, in miliseconds */
  startCoverAt: number;

  /** what timestamp to start the AUDIO from, in seconds */
  startAudioFrom: number;

  episodeText: string;

  /** how many seconds should the fade out start from */
  startFadeOutFromLastNSeconds: number;
}> = ({
  image,
  audio,
  cover,
  startPhotoAt,
  startCoverAt,
  startAudioFrom,
  startFadeOutFromLastNSeconds,
  episodeText,
}) => {
  const { height, fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const startPhoto = startPhotoAt * fps;
  const opacity = interpolate(
    frame,
    [startCoverAt, startCoverAt + fps * 2],
    [0, 1]
  );

  const progressCover = spring({
    frame: frame - startCoverAt,
    fps,
    from: 0,
    to: 0.8,
    config: {
      mass: 2.5,
      damping: 1000,
    },
  });

  const textFor = fps * 3;
  const volume = interpolate(
    frame,
    [
      0,
      textFor,
      durationInFrames - fps * startFadeOutFromLastNSeconds,
      durationInFrames,
    ],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <Audio src={audio} startFrom={startAudioFrom} volume={volume} />
      <div className={styles.blackBackground}></div>
      <Sequence durationInFrames={textFor / 2} from={0}>
        <div className={styles.thisWeekWrapper}>
          <h1 className={styles.thisWeek}>
            Essa semana em tricerátops show...
          </h1>
        </div>
      </Sequence>
      <Sequence durationInFrames={textFor} from={textFor / 2}>
        <div className={styles.thisWeekWrapper}>
          <h1 className={styles.thisWeek}>{episodeText}</h1>
        </div>
      </Sequence>

      <Sequence
        durationInFrames={Infinity}
        from={startPhoto + (textFor + textFor / 2)}
      >
        <FourFaces image={image} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={startCoverAt}>
        <Img
          src={cover}
          style={{
            opacity,
            transform: `scale(${progressCover})`,
          }}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
