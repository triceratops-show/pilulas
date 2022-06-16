import React from "react";
import cx from "classnames";
import {
  Audio,
  Easing,
  Sequence,
  Video,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import classes from "./ReelsVideo.module.scss";
import { PaginatedSubtitles } from "../audiograma/Subtitles";

// example
import cover from "../assets/episodio-42/episodio-42.jpg";
import bgImg from "../assets/episodio-42/foto-1.webp";
import audioSrc from "../assets/episodio-42/ymo.mp3";
import videoFinal from "../assets/episodio-42/video-final.webm";
import subtitles from "../assets/episodio-42/ymo.srt";

const elements = [
  "wrapper",
  "title",
  "titleText",
  "caption",
  "captionText",
  "credits",
  "creditsTitle",
  "creditsSocial",
] as const;

export type ReelsVideoCompositionProps = {
  audioSrc: string;
  title: string;
  caption: string;
  credits: string;
  creditsAt: number;
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }>;
};

const example = {
  audioSrc: audioSrc,
  coverEndsAt: 2,
  creditsAt: 86,
  styles: {
    wrapper: {
      backgroundImage: `url(${bgImg})`,
      backgroundColor: "white",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    title: {
      display: "block",
      fontSize: "1.7rem",
      paddingTop: "16rem",
    },
    titleText: {
      backgroundColor: "#c6e2f3",
    },
    caption: {
      padding: "0 1.5rem",
      fontSize: "1.125rem",
      textAlign: "right",
    },
    captionText: {
      backgroundColor: "#c6e2f3",
    },
    credits: {
      backgroundColor: "black",
      color: "white",
    },
    creditsTitle: {
      fontSize: "1.125rem",
      textAlign: "center",
    },
  },
  title: "Yellow Magic Orchestra",
  caption: "Por Luiz Terra",
  credits: "Episódio #42 Can U Believe It’s Friday Once Again?",
};

// LA
// OPCAO 1
// { [classes.hide]: frame < 2 * fps || frame > 85 * fps },
// startFrom={176 * fps}
// durationInFrames 89.5
// OPCAO 2
// startFrom={7.8 * fps}
// durationInFrames 90

export const ReelsVideoComposition = (props: ReelsVideoCompositionProps) => {
  const {
    audioSrc,
    coverEndsAt,
    creditsAt,
    title,
    caption,
    credits,
    classes: classesProp,
    styles,
  } = Object.assign({}, example, props);

  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  return (
    <>
      <Audio src={audioSrc} />
      <Sequence name="cover" from={0} durationInFrames={2 * fps}>
        <div
          className={cx(classes.wrapper, classesProp?.wrapper)}
          style={styles?.wrapper}
        >
          <div
            className={cx(classes.title, classesProp?.title)}
            style={styles?.title}
          >
            <span style={styles?.titleText}>{title}</span>
          </div>
          <div
            className={cx(classes.caption, classesProp?.caption)}
            style={styles?.caption}
          >
            <span style={styles?.captionText}>{caption}</span>
          </div>
        </div>
      </Sequence>
      <Sequence name="credits" from={creditsAt * fps}>
        <div
          className={cx(classes.credits, classesProp?.credits)}
          style={styles?.credits}
        >
          <img src={cover} />
          <div
            className={cx(classes.title, classesProp?.creditsTitle)}
            style={styles?.creditsTitle}
          >
            {credits}
          </div>
          <div
            className={cx(classes.social, classesProp?.creditsSocial)}
            style={styles?.creditsSocial}
          >
            www.triceratops.show
          </div>
        </div>
      </Sequence>
      <Sequence name="video" from={0} durationInFrames={durationInFrames}>
        <div
          className={cx(classes.video, {
            [classes.hide]:
              frame < coverEndsAt * fps || frame > creditsAt * fps,
          })}
        >
          <Video
            src={videoFinal}
            startFrom={7.8 * fps}
            volume={interpolate(
              frame,
              [0, 10 * fps, 75 * fps, 78 * fps, durationInFrames],
              [0.6, 0.2, 0.2, 0.6, 0.6]
            )}
          />
        </div>
      </Sequence>
      <Sequence name="subtitles" from={0} durationInFrames={76.5 * fps}>
        <div
          className={cx(classes.subtitle)}
        >
          <PaginatedSubtitles
            src={subtitles}
            startFrame={0}
            endFrame={durationInFrames}
            linesPerPage={4}
            renderSubtitleItem={(item) => <span>{item.text}</span>}
          />
        </div>
      </Sequence>
    </>
  );
};
