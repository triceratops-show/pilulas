import React from "react";
import { Audiogram } from "../audiogram/Audiogram";
import type { AudiogramProps } from "../audiogram/Audiogram";

import classes from "./QualEAMusica.module.scss";

export type QualEAMusicaProps = AudiogramProps;

export const QualEAMusica: React.FC<QualEAMusicaProps> = (props) => {
  return (
    <Audiogram {...props}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Qual é a música?</h1>
      </div>
    </Audiogram>
  );
};
