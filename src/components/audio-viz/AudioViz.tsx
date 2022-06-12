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
  numberOfSamples?: number;
  minVisualizationValue?: number;
  maxVisualizationValue?: number;
  baseBarHeight?: number;
};

/**
 * Audio visualization with wave-like bar chart animation
 *
 * https://www.remotion.dev/docs/visualize-audio
 */
export const AudioViz: React.FC<AudioVizProps> = ({
  src,
  classes,
  styles,
  numberOfSamples = 256,
  minVisualizationValue = 8,
  maxVisualizationValue = 30,
  baseBarHeight = 500,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(src);

  // https://github.com/remotion-dev/remotion/issues/853#issuecomment-1057247735
  if (!audioData) {
    return null;
  }

  const allVisualizationValues = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples, // use more samples to get a nicer visualisation
  });

  // An array of values describing the amplitude of each frequency range
  // Each value is between 0 and 1
  // The array is of length defined by the numberOfSamples parameter
  // The values on the left of the array are low frequencies
  // and as we move towards the right, we go through the mid and high frequencies
  // Usually the values on left side of the array can become much larger than the values on the right
  // pick the low values because they look nicer than high values
  // feel free to play around :)
  const visualization = allVisualizationValues.slice(
    minVisualizationValue,
    maxVisualizationValue
  );

  const mirrored = [...visualization.slice(1).reverse(), ...visualization];

  // Render a bar chart for each frequency, the higher the amplitude,
  // the longer the bar
  return (
    <div
      className={cx(
        "h-16 flex flex-row items-center justify-center gap-1",
        classes?.wrapper
      )}
      style={styles?.wrapper}
    >
      {mirrored.map((v, i) => {
        return (
          <div
            key={i}
            className={cx("w-1 rounded bg-yellow-300", classes?.wave)}
            style={{
              height: `${baseBarHeight * Math.sqrt(v)}%`,
              ...styles?.wave,
            }}
          />
        );
      })}
    </div>
  );
};
