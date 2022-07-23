import { Composition, Still } from "remotion";

import "./style.css";

import { Audiogram } from "./compositions/audiogram/Audiogram";
import {
  durationInSeconds as durationInSecondsAudiogram,
  defaultProps as defaultPropsAudiogram,
} from "./compositions/audiogram/example";

import { QualEAMusica } from "./compositions/qual-e-a-musica/QualEAMusica";
import {
  durationInSeconds as durationInSecondsQEAM,
  defaultProps as defaultPropsQEAM,
} from "./compositions/qual-e-a-musica/example";

import { AudiogramWithSubtitles } from "./compositions/audiogram-with-subtitles/AudiogramWithSubtitles";
import {
  durationInSeconds as durationInSecondsAudiogramWithSubtitles,
  defaultProps as defaultPropsAudiogramWithSubtitles,
} from "./compositions/audiogram-with-subtitles/example";

import { FourFacesFadeIn } from "./compositions/four-faces-fadein/FourFacesFadeIn";
import {
  durationInSeconds as durationInSecondsFFFI,
  defaultProps as defaultPropsFFFI,
} from "./compositions/four-faces-fadein/example";

import { FourFacesFadeInWithIntro } from "./compositions/four-faces-fadein-with-intro/FourFacesFadeInWithIntro";
import {
  durationInSeconds as durationInSecondsFFFIWI,
  defaultProps as defaultPropsFFFIWI,
} from "./compositions/four-faces-fadein-with-intro/example";

import { ImgWithAudio } from "./compositions/img-with-audio/ImgWithAudio";
import {
  durationInSeconds as durationInSecondsImgWithAudio,
  defaultProps as defaultPropsImgWithAudio,
} from "./compositions/img-with-audio/example";

import { VideoWithText } from "./compositions/video-with-text/VideoWithText";
import {
  durationInSeconds as durationInSecondsVideoWithText,
  defaultProps as defaultPropsVideoWithText,
} from "./compositions/video-with-text/example";

import { VideoWithCoverCredits } from "./compositions/video-with-cover-credits/VideoWithCoverCredits";
import {
  durationInSeconds as durationInSecondsVWCC,
  defaultProps as defaultPropsVWCC,
} from "./compositions/video-with-cover-credits/example";

import { CarouselImg } from "./components/carousel-img/CarouselImg";
import { defaultProps as defaultPropsCarouselImg } from "./components/carousel-img/example";

import { TheMonks } from "./parameters/episodio-43/TheMonks";

// import { TheStrokes, durationInSeconds } from "./parameters/dia-do-rock/TheStrokes";

import { Meditacao, durationInSeconds } from "./parameters/episodio-47/Meditacao";

const fps = 30;

export const RemotionVideo: React.FC = () => {
  return (
    <>
      {/* <Composition
        id="Audiogram"
        component={Audiogram}
        fps={fps}
        width={1080}
        height={1080}
        durationInFrames={durationInSecondsAudiogram * fps}
        defaultProps={defaultPropsAudiogram}
      />
      <Composition
        id="QualEAMusica"
        component={QualEAMusica}
        fps={fps}
        width={1080}
        height={1080}
        durationInFrames={durationInSecondsQEAM * fps}
        defaultProps={defaultPropsQEAM}
      />
      <Composition
        id="AudiogramWithSubtitles"
        component={AudiogramWithSubtitles}
        fps={fps}
        width={1080}
        height={1080}
        durationInFrames={durationInSecondsAudiogramWithSubtitles}
        defaultProps={defaultPropsAudiogramWithSubtitles}
      />
      <Composition
        id="FourFacesFadeIn"
        component={FourFacesFadeIn}
        fps={fps}
        width={1080}
        height={1080}
        durationInFrames={durationInSecondsFFFI * fps}
        defaultProps={defaultPropsFFFI}
      />
      <Composition
        id="FourFacesFadeInWithIntro"
        component={FourFacesFadeInWithIntro}
        fps={fps}
        width={1080}
        height={1080}
        durationInFrames={durationInSecondsFFFIWI * fps}
        defaultProps={defaultPropsFFFIWI}
      />
      <Composition
        id="ImgWithAudio"
        component={ImgWithAudio}
        fps={fps}
        width={1080}
        height={1920}
        durationInFrames={durationInSecondsImgWithAudio * fps}
        defaultProps={defaultPropsImgWithAudio}
      />
      <Composition
        id="VideoWithText"
        component={VideoWithText}
        fps={fps}
        width={1080}
        height={1920}
        durationInFrames={durationInSecondsVideoWithText * fps}
        defaultProps={defaultPropsVideoWithText}
      />
      <Composition
        id="VideoWithCoverCredits"
        component={VideoWithCoverCredits}
        fps={fps}
        width={1080}
        height={1080}
        durationInFrames={durationInSecondsVWCC * fps}
        defaultProps={defaultPropsVWCC}
      />
      <Still
        id="CarouselImg"
        component={CarouselImg}
        width={1080}
        height={1080}
        defaultProps={defaultPropsCarouselImg}
      /> */}
      {/* <Composition
        id="TheMonks"
        component={TheMonks}
        width={1200}
        height={1200}
        fps={fps}
        durationInFrames={58.1 * fps}
      />
      <Composition
        id="TheStrokes"
        component={TheStrokes}
        width={1080}
        height={1920}
        fps={fps}
        durationInFrames={durationInSeconds * fps}
      /> */}
      <Composition
        id="Meditacao"
        component={Meditacao}
        width={1080}
        height={1080}
        fps={fps}
        durationInFrames={durationInSeconds * fps}
      />
    </>
  );
};
