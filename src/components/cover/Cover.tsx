import React from "react";
import cx from "classnames";
import { Img } from "remotion";

import classes from "./Cover.module.scss";

const elements = [
  "wrapper",
  "content",
  "title",
  "titleText",
  "subtitle",
  "subtitleText",
  "caption",
  "captionText",
  "overline",
  "overlineText",
] as const;

export type CoverProps = {
  title: string;
  subtitle?: string;
  caption?: string;
  overline?: string;
  img?: Partial<React.ComponentPropsWithoutRef<typeof Img>>;
  font?: "none" | "joan" | "walrus";
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }>;
};

export const Cover = ({
  title,
  subtitle,
  caption,
  overline,
  img,
  font = "none",
  classes: classesProp,
  styles,
}: CoverProps) => {
  return (
    <div
      className={cx(classes.wrapper, classesProp?.wrapper)}
      style={styles?.wrapper}
    >
      {img && <Img {...img} className={cx(classes.img, img?.className)} />}
      <div
        className={cx(classes.content, classesProp?.content)}
        style={styles?.content}
        data-font={font}
      >
        {overline && (
          <div
            className={cx(classes.overline, classesProp?.overline)}
            style={styles?.overline}
          >
            <span style={styles?.overlineText}>{overline}</span>
          </div>
        )}
        <div
          className={cx(classes.title, classesProp?.title)}
          style={styles?.title}
        >
          <span style={styles?.titleText}>{title}</span>
        </div>
        {subtitle && (
          <div
            className={cx(classes.subtitle, classesProp?.subtitle)}
            style={styles?.subtitle}
          >
            <span style={styles?.subtitleText}>{subtitle}</span>
          </div>
        )}
        {caption && (
          <div
            className={cx(classes.caption, classesProp?.caption)}
            style={styles?.caption}
          >
            <span style={styles?.captionText}>{caption}</span>
          </div>
        )}
      </div>
    </div>
  );
};
