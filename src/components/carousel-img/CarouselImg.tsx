import React from "react";
import cx from "classnames";
import { Img } from "remotion";

import classes from "./CarouselImg.module.scss";

const elements = ["wrapper", "content"] as const;

export type CarouselImgProps = {
  preset?: "none" | "walrus";
  img: React.ComponentPropsWithoutRef<typeof Img>;
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }>;
  children?: React.ReactNode;
};

export const CarouselImg = ({
  preset = "none",
  img,
  classes: classesProp,
  styles,
  children,
}: CarouselImgProps) => {
  return (
    <div
      className={cx(classes.wrapper, classesProp?.wrapper)}
      style={styles?.wrapper}
    >
      <Img
        {...img}
        className={cx(classes.img, img.className)}
      />
      <div
        className={cx(classes.content, classesProp?.content)}
        style={styles?.content}
        data-preset={preset}
      >
        {children}
      </div>
    </div>
  );
};
