import React from "react";
import cx from "classnames";
import { Audio } from "remotion";

import { AudioViz, AudioVizProps } from "../../components/audio-viz/AudioViz";
import classes from "./ImgWithAudio.module.scss";

const elements = ["wrapper", "text", "caption"] as const;

export type ImgWithAudioProps = {
  audio: React.ComponentPropsWithoutRef<typeof Audio> & { src: string };
  text: string;
  caption: string;
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }> &
    Partial<{
      audioviz: AudioVizProps["classes"];
    }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }> &
    Partial<{
      audioviz: AudioVizProps["styles"];
    }>;
};

export const ImgWithAudio = ({
  audio,
  text,
  caption,
  classes: classesProp,
  styles,
}: ImgWithAudioProps) => {
  return (
    <div
      className={cx(classes.wrapper, classesProp?.wrapper)}
      style={styles?.wrapper}
    >
      <Audio {...audio} />
      <div className={cx(classes.text, classesProp?.text)} style={styles?.text}>
        {text}
      </div>
      <AudioViz
        src={audio.src}
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
