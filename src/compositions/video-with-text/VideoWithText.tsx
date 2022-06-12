import React from "react";
import cx from "classnames";
import { Sequence, Video } from "remotion";

import classes from "./VideoWithText.module.scss";

const elements = [
  "content",
  "title",
  "titleText",
  "subtitle",
  "subtitleText",
  "overline",
  "video",
] as const;

export type VideoWithTextProps = {
  video: React.ComponentPropsWithoutRef<typeof Video>;
  sequence: Omit<React.ComponentPropsWithoutRef<typeof Sequence>, "children">;
  title: string;
  subtitle: string;
  overline?: string;
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }>;
};

export const VideoWithText: React.FC<VideoWithTextProps> = ({
  video,
  sequence,
  title,
  subtitle,
  overline,
  classes: classesProp,
  styles,
}) => {
  return (
    <Sequence name="Video" {...sequence}>
      <div className={cx(classes.video, classesProp?.video)}>
        <Video {...video} />
      </div>
      <div
        className={cx(classes.content, classesProp?.content)}
        style={styles?.content}
      >
        <div
          className={cx(classes.title, classesProp?.title)}
          style={styles?.title}
        >
          {overline && (
            <span
              className={cx(classes.overline, classesProp?.overline)}
              style={styles?.overline}
            >
              {overline}
            </span>
          )}
          <br />
          <span
            className={cx(classesProp?.titleText)}
            style={styles?.titleText}
          >
            {title}
          </span>
        </div>
        <div
          className={cx(classes.subtitle, classesProp?.subtitle)}
          style={styles?.subtitle}
        >
          <span
            className={cx(classesProp?.subtitleText)}
            style={styles?.subtitleText}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </Sequence>
  );
};
