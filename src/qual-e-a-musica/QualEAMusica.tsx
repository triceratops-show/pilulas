import React from "react";
import {
  Audio,
  Img,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import styles from "./QualEAMusica.module.scss";
import gridImg from "./qual-a-musica-grid.png";

// Propriedades interessantes
// Nome do arquivo de áudio
// Nome do episódio
// Capa do episódio
// Intervalo
// Título

const AudioViz = ({ src }: { src: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(src);

  if (!audioData) {
    return null;
  }

  const allVisualizationValues = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 256, // use more samples to get a nicer visualisation
  });

  // pick the low values because they look nicer than high values
  // feel free to play around :)
  const visualization = allVisualizationValues.slice(8, 30);

  const mirrored = [...visualization.slice(1).reverse(), ...visualization];

  return (
    <div className="flex flex-row h-16 items-center justify-center gap-1">
      {mirrored.map((v) => {
        return (
          <div
            className="w-1 bg-yellow-300 rounded"
            style={{
              height: `${500 * Math.sqrt(v)}%`,
            }}
          />
        );
      })}
    </div>
  );
};

interface QualEAMusicaProps {
  audio: string;

  /** what timestamp to start the AUDIO from, in seconds */
  startAudioFrom: number;
}
export const QualEAMusica: React.FC<QualEAMusicaProps> = ({
  audio,
  startAudioFrom,
}) => {
  const { durationInFrames } = useVideoConfig();

  // change this to adjust the part of the audio to use
  //  const offset = 2000;
  const offset = 0;

  return (
    <Sequence from={-offset}>
      <Audio src={audio} startFrom={startAudioFrom} />

      <div style={{ width: "100%", position: "relative", background: "white" }}>
        <Img style={{ ["zIndex"]: "1", position: "absolute" }} src={gridImg} />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%) scaleX(-51%)",
          }}
        >
          <AudioViz src={audio} />
        </div>
        <div className={styles.qualEAMusicaWrapper}>
          <h1 className={styles.qualEAMusica}>Qual é a música?</h1>
        </div>
      </div>
    </Sequence>
  );
};
