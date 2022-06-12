import { Audio, Img, Sequence } from "remotion";
import cx from "classnames";

import { AudioViz, AudioVizProps } from "../../components/audio-viz/AudioViz";

import classes from "./Audiogram.module.scss";
import roundGrid from "./grid.png";

const elements = ["wrapper", "gridImg", "audioVizWrapper", "content"] as const;

// Propriedades interessantes
// Nome do arquivo de áudio
// Nome do episódio
// Capa do episódio
// Intervalo
// Título

export type AudiogramProps = {
  audio: React.ComponentPropsWithoutRef<typeof Audio> & { src: string };
  sequence: Omit<React.ComponentPropsWithoutRef<typeof Sequence>, "children">;
  gridImg?: string;
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
  children?: React.ReactNode;
};

/**
 * TODO: parametrize styles
 */
export const Audiogram: React.FC<AudiogramProps> = ({
  audio,
  sequence,
  gridImg = roundGrid,
  classes: classesProp,
  styles,
  children,
}) => {
  return (
    <Sequence name="Audiogram" {...sequence}>
      <Audio {...audio} />
      <div
        className={cx(classes.wrapper, classesProp?.wrapper)}
        style={styles?.wrapper}
      >
        <Img
          src={gridImg}
          className={cx(classes.gridImg, classesProp?.gridImg)}
          style={styles?.gridImg}
        />
        <div
          className={cx(classes.audioVizWrapper, classesProp?.audioVizWrapper)}
          style={styles?.audioVizWrapper}
        >
          <AudioViz
            src={audio.src}
            classes={classes?.audioviz}
            styles={styles?.audioviz}
          />
        </div>
        {children}
      </div>
    </Sequence>
  );
};
