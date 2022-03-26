import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";
import parseSRT, { SubtitleItem } from "parse-srt";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import {
  Audio,
  Easing,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  continueRender,
  staticFile,
  delayRender,
  spring,
} from "remotion";
//import audioSource from "./assets/audio.mp3";
import coverImg from "./assets/cover.jpg";
import gridImg from "./assets/grid.png";
import subtitlesSource from "./assets/subtitles.srt";
import { PaginatedSubtitles } from "./Subtitles";
import styles from "./Bla.module.scss";
import { SubtitleItem } from "parse-srt";
import { useWindowedFrameSubs } from "./Subtitles";

const font = new FontFace(
  `ComicZine`,
  `url(${staticFile("fonts/comic_zine_ot.otf")})`
);

type PaginationLine = {
  index: number;
  offsetTop: number;
};
const AudioViz = ({ src }: { src: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(src);
  //  const [handle] = useState(() => delayRender());

  //  const waitForFont = delayRender();
  //
  //  const fetchFont = () => {
  //    return font
  //      .load()
  //      .then(() => {
  //        document.fonts.add(font);
  //        continueRender(waitForFont);
  //      })
  //      .catch((err) => console.log("Error loading font", err));
  //  };
  //
  //  useEffect(() => {
  //    fetchFont();
  //  }, []);

  // https://github.com/remotion-dev/remotion/issues/853#issuecomment-1057247735
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
    <div className="flex flex-row h-16 items-center justify-center gap-1 p-2">
      {mirrored.map((v) => {
        return (
          <div
            className="w-1 bg--yellow-300 rounded"
            style={{
              height: `${500 * Math.sqrt(v)}%`,
              background: "#ffa83f",
            }}
          />
        );
      })}
    </div>
  );
};

interface PilulaComCapaProps {
  cover: string;
  title: string;
  subtitles: string;
  audio: string;
}
export const PilulaComCapa: React.FC<PilulaComCapaProps> = ({
  cover,
  title,
  subtitles,
  audio,
}: PilulaComCapaProps) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // change this to adjust the part of the audio to use
  //  const offset = 2000;
  const offset = 0;

  let isEnding = false;

  // last 3 seconds
  if (frame >= durationInFrames - fps * 3) {
    isEnding = true;
  }

  const scal = interpolate(
    frame,
    [durationInFrames - fps * 3, durationInFrames - fps * (3 - 0.5)],
    [1, 1 / 0.3],
    {
      easing: Easing.ease,
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    }
  );

  return (
    <>
      <Sequence from={-offset}>
        <div
          className="flex flex-col w-full h-full text-white p-4 bg-black"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          <Audio src={audio} />
          <div className="flex flex-row">
            <div
              className={cx(styles.cover)}
              style={{ transform: `scale(${scal})` }}
            >
              <Img src={cover} />
            </div>

            <div
              className={cx(
                "ml-4 leading-tight font-extrabold text-gray-700 flex items-center"
              )}
            >
              <span className={styles.title}>{title}</span>
            </div>
          </div>

          <div className="mt-4">
            <AudioViz src={audio} />
          </div>

          <div className="mt-2 text-2xl font-semibold">
            <PaginatedSubtitles
              // src={subtitlesSource}
              src={subtitles}
              startFrame={offset}
              endFrame={offset + durationInFrames}
              linesPerPage={4}
              renderSubtitleItem={(item, frame) => (
                <>
                  <span
                    style={{
                      backfaceVisibility: "hidden",
                      display: "inline-block",

                      opacity: interpolate(
                        frame,
                        [item.start, item.start + 15],
                        [0, 1],
                        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                      ),
                      transform: `perspective(1000px) translateY(${interpolate(
                        frame,
                        [item.start, item.start + 15],
                        [0.5, 0],
                        {
                          easing: Easing.out(Easing.quad),
                          extrapolateLeft: "clamp",
                          extrapolateRight: "clamp",
                        }
                      )}em)`,
                    }}
                  >
                    {item.text}
                  </span>{" "}
                </>
              )}
            />
          </div>
        </div>
      </Sequence>
      {/*
      <Sequence from={durationInFrames - fps * 3}>
        <div className="flex flex-col w-full h-full text-white p-4 bg-black">
          <div
            className={styles.cover}
            style={{ transform: `scale(${scale})` }}
          >
            <Img src={cover} />
          </div>
        </div>
      </Sequence>
        */}
    </>
  );
};

function loadFont() {}
