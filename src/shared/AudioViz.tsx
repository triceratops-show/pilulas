import React from "react";
import cx from "classnames";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";

export type AudioVizProps = {
  src: string;
  classes?: Partial<{
    wrapper: string;
    wave: string;
  }>;
  styles?: Partial<{
    wrapper: React.CSSProperties;
    wave: React.CSSProperties;
  }>;
};

export const AudioViz = ({ src, classes, styles }: AudioVizProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(src);

  if (!audioData) {
    return null;
  }

  const allVisualizationValues = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 256, // use more samples to get a nicer visualisation
  });

  // pick the low values because they look nicer than high values
  // feel free to play around :)
  const visualization = allVisualizationValues.slice(8, 30);

  const mirrored = [...visualization.slice(1).reverse(), ...visualization];

  return (
    <div
      className={cx(
        "h-16 flex flex-row items-center justify-center gap-1",
        classes?.wrapper,
      )}
      style={styles?.wrapper}
    >
      {mirrored.map((v, i) => {
        return (
          <div
            key={i}
            className={cx(
              "w-1 rounded bg-yellow-300",
              classes?.wave,
            )}
            style={{
              height: `${500 * Math.sqrt(v)}%`,
              ...styles?.wave,
            }}
          />
        );
      })}
    </div>
  );
};
