import React from "react";
import cx from "classnames";
import { Img } from "remotion";

import classes from "./Credits.module.scss";

const elements = ["wrapper", "content", "title", "social"] as const;

export type CreditsProps = {
  episode: {
    cover: string;
    title: string;
  };
  img?: Partial<React.ComponentPropsWithoutRef<typeof Img>>;
  font?: "none" | "joan" | "walrus";
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }>;
};

export const Credits = ({
  episode,
  img,
  font = "none",
  classes: classesProp,
  styles,
}: CreditsProps) => {
  return (
    <div
      className={cx(classes.wrapper, classesProp?.wrapper)}
      style={styles?.wrapper}
      data-font={font}
    >
      <Img
        {...img}
        src={episode.cover}
        className={cx(classes.img, img?.className)}
      />
      <div
        className={cx(classes.content, classesProp?.content)}
        style={styles?.content}
      >
        <div
          className={cx(classes.title, classesProp?.title)}
          style={styles?.title}
        >
          {episode.title}
        </div>
        <div
          className={cx(classes.social, classesProp?.social)}
          style={styles?.social}
        >
          www.triceratops.show
        </div>
      </div>
    </div>
  );
};
