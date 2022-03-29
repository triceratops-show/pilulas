import { useEffect, useCallback, useState } from "react";
import { Composition } from "remotion";
import { AudiogramComposition } from "./Composition";
import { AudiogramComposition as Example } from "./CompositionExample";
import { AudiogramComposition as PilulaComImagem } from "./PilulaComImagem";
import { PilulaComCapa } from "./PilulaComCapa";
import "./fonts.css";
import "./style.css";
import ep30Cover from "./assets/ep-30.jpg";
import ep30audio from "./assets/episodio-30/pirula-3-estragando-show-dos-amigos.mp3";
import ep30subtitles from "./assets/episodio-30/pilula-3.srt";
import { continueRender, staticFile, delayRender } from "remotion";
import { getAudioDuration } from "@remotion/media-utils";
import { Template1 as Divulgacao } from "./Divulgacao";
import loSiento from "./assets/losiento.mp3";
import ep31Cover from "./assets/episodio-31/cover.png";

const fps = 30;
//const durationInFrames = 30 * fps;
const durationInFrames = 18 * fps;

export const RemotionVideo: React.FC = () => {
  const [duration, setDuration] = useState<number | null>(null);
  const getDuration = useCallback(async () => {
    const imported = await getAudioDuration(ep30audio);
    setDuration(imported);
  }, []);

  useEffect(() => {
    getDuration();
  }, []);

  if (!duration) {
    return null;
  }

  // 3 seconds at the end
  const ending = fps * 3;

  return (
    <>
      <Composition
        id="PilulaComImagem"
        component={PilulaComImagem}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />
      <Composition
        id="Audiogram"
        component={AudiogramComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />
      {/*
      <Composition
        id="Example"
        component={Example}
        durationInFrames={30 * fps}
        fps={fps}
        width={1080}
        height={1080}
      />
        */}
      <Composition
        id="PilulaComCapa"
        component={PilulaComCapa}
        defaultProps={{
          audio: ep30audio,
          cover: ep30Cover,
          title: "#30 Tricerátops Apresenta: trema¨",
          subtitles: ep30subtitles,
        }}
        durationInFrames={Math.round(duration * fps) + ending}
        fps={fps}
        width={1080}
        height={1080}
      />
      <Composition
        id="Divulgacao"
        component={Divulgacao}
        defaultProps={{
          audio: loSiento,
          cover: ep31Cover,
          sources: ["assets/episodio-31/justine1.jpg"],
        }}
        durationInFrames={Math.round(13 * fps)}
        fps={fps}
        width={1080}
        height={1080}
      />
    </>
  );
};
