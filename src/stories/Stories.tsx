import React from "react";
import cx from "classnames";
import { Audio } from "remotion";
import classes from "./Stories.module.scss";
import { AudioViz, AudioVizProps } from "../shared/AudioViz";

// example
import bgImg from "../assets/stories/ep-37-cover-cropped.jpg";
import audioSrc from "../assets/stories/episodio-41-pilula.mp3";

export type StoriesCompositionProps = {
  audioSrc: string;
  text: string;
  caption: string;
  classes?: Partial<{
    audioviz: AudioVizProps["classes"];
    caption: string;
    text: string;
    wrapper: string;
  }>;
  styles?: Partial<{
    audioviz: AudioVizProps["styles"];
    background: Partial<{
      backgroundColor: string;
      backgroundImage: string;
      backgroundPosition: string;
      backgroundRepeat: string;
    }>;
    caption: React.CSSProperties;
    wrapper: React.CSSProperties;
    text: React.CSSProperties;
  }>;
};

const example = {
  audioSrc: audioSrc,
  styles: {
    background: {
      backgroundImage: `url(${bgImg})`,
      backgroundColor: "#d8e9bd",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
    },
    text: {
      height: "38%",
    },
    audioviz: {
      wave: {
        backgroundColor: "#71708e",
      },
    },
  },
  text: "",
  caption: "Episódio #41 Na Série B do Rock Alternativo",
};

export const StoriesComposition = (props: StoriesCompositionProps) => {
  const {
    audioSrc,
    text,
    caption,
    classes: classesProp,
    styles,
  } = Object.assign({}, example, props);

  return (
    <div
      className={cx(classes.wrapper, classesProp?.wrapper)}
      style={{
        ...styles?.wrapper,
        ...styles?.background,
      }}
    >
      <Audio src={audioSrc} />
      <div className={cx(classes.text, classesProp?.text)} style={styles?.text}>
        {text}
      </div>
      <AudioViz
        src={audioSrc}
        classes={classesProp?.audioviz}
        styles={styles?.audioviz}
      />
      <div
        className={cx(classes.caption, classesProp?.caption)}
        style={styles?.caption}
      >
        {caption}
      </div>
    </div>
  );
};
