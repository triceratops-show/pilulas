import React from "react";
import cx from "classnames";
import { Video, useVideoConfig } from "remotion";
import classes from "./StoriesVideo.module.scss";

// example
import video from "../assets/episodio-42/lynch.webm";

export type StoriesVideoCompositionProps = {
  videoSrc: string;
  text: string;
  caption: string;
  classes?: Partial<{
    caption: string;
    text: string;
    wrapper: string;
  }>;
  styles?: Partial<{
    caption: React.CSSProperties;
    wrapper: React.CSSProperties;
    text: React.CSSProperties;
  }>;
};

const example = {
  videoSrc: video,
  styles: {
    wrapper: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      fontFamily: "'Kdam Thmor Pro', sans-serif",
    },
    text: {
      height: "38%",
    },
    caption: {
      textAlign: "center",
      transform: "rotate(-5deg)",
      marginTop: "17rem",
    },
    audioviz: {
      wave: {
        backgroundColor: "#71708e",
      },
    },
  },
  text: "O novo episódio de Tricerátops Show:",
  caption: "#42 Can U Believe It’s Friday Once Again?",
};

export const StoriesVideoComposition = (props: StoriesVideoCompositionProps) => {
  const {
    videoSrc,
    text,
    caption,
    classes: classesProp,
    styles,
  } = Object.assign({}, example, props);

  const { fps } = useVideoConfig();

  return (
    <>
    <div className={classes.video}>
    <Video src={videoSrc} startFrom={9.5 * fps} />
    </div>
    <div
      className={cx(classes.wrapper, classesProp?.wrapper)}
      style={styles?.wrapper}
    >
      <div className={cx(classes.text, classesProp?.text)} style={styles?.text}>
        <span style={{ backgroundColor: "#c6e2f3", marginBottom: "0.5rem", display: "inline-block", fontSize: "1.5rem" }}>NO AR</span><br />
        <span style={{ backgroundColor: "#d8e9bd", fontSize: "1.75rem" }}>{text}</span>
      </div>
      <div
        className={cx(classes.caption, classesProp?.caption)}
        style={styles?.caption}
      >
        <span style={{ backgroundColor: "#fea6d2", fontSize: "1.75rem" }}>{caption}</span>
      </div>
    </div>
    </>
  );
};
