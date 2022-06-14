import React from "react";
import cx from "classnames";
import { Audio, Sequence, useVideoConfig } from "remotion";
import classes from "./Reels.module.scss";

// example
import bgImg from "../assets/episodio-41/dj.png";
import audioSrc from "../assets/episodio-41/dj.mp3";

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

export type ReelsCompositionProps = {
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
  creditsAt: 50,
  styles: {
    wrapper: {
      backgroundImage: `url(${bgImg})`,
      backgroundColor: "white",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "80%",
    },
    title: {
      display: "block",
      fontSize: "1.7rem",
      paddingTop: "14rem",
    },
    titleText: {
      backgroundColor: "#d8e9bd",
    },
    caption: {
      padding: "0 1.5rem",
      fontSize: "1.125rem",
      textAlign: "right",
    },
    captionText: {
      backgroundColor: "#d8e9bd",
    },
  },
  title: "Como castelar o que a galera quer ouvir na pista?",
  caption: "Por DJ Luiz Terra",
  credits: "Episódio #41 Na Série B do Rock Alternativo",
};

export const ReelsComposition = (props: ReelsCompositionProps) => {
  const {
    audioSrc,
    creditsAt,
    title,
    caption,
    credits,
    classes: classesProp,
    styles,
  } = Object.assign({}, example, props);

  const { fps } = useVideoConfig();

  return (
    <>
      <Audio src={audioSrc} />
      <Sequence from={0} durationInFrames={creditsAt * fps}>
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
      <Sequence from={creditsAt * fps}>
        <div
          className={cx(classes.credits, classesProp?.credits)}
          style={styles?.credits}
        >
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
    </>
  );
};
