import { interpolate } from "remotion";
import type { Audio, Sequence, Video } from "remotion";

export type AudioPropsInSeconds = Omit<
  React.ComponentPropsWithoutRef<typeof Audio>,
  "startFrom" | "endAt"
> & {
  startFromSeconds?: number;
  endAtSeconds?: number;
  volumeInterpolate?: {
    inputRange: readonly number[];
    outputRange: readonly number[];
    options?: Parameters<typeof interpolate>[3];
  };
};

export function convertAudioPropsToFrames(
  fps: number,
  props: AudioPropsInSeconds,
  frame?: number
) {
  return {
    ...props,
    startFrom: props.startFromSeconds
      ? props.startFromSeconds * fps
      : undefined,
    endAt: props.endAtSeconds ? props.endAtSeconds * fps : undefined,
    volume:
      props.volumeInterpolate && frame
        ? interpolate(
            frame,
            convertRangeFromSecondsToFrames(
              fps,
              props.volumeInterpolate.inputRange
            ),
            props.volumeInterpolate.outputRange,
            props.volumeInterpolate.options
          )
        : props.volume,
  };
}

export type SequencePropsInSeconds = Omit<
  React.ComponentPropsWithoutRef<typeof Sequence>,
  "from" | "durationInFrames" | "children"
> & {
  fromSeconds: number;
  durationInSeconds?: number;
};

export function convertSequencePropsToFrames(
  fps: number,
  props: SequencePropsInSeconds
) {
  return {
    ...props,
    from: props.fromSeconds * fps,
    durationInFrames: props.durationInSeconds ? props.durationInSeconds * fps : undefined,
  };
}

export type VideoPropsInSeconds = Omit<
  React.ComponentPropsWithoutRef<typeof Video>,
  "startFrom" | "endAt"
> & {
  startFromSeconds?: number;
  endAtSeconds?: number;
  volumeInterpolate?: {
    inputRange: readonly number[];
    outputRange: readonly number[];
    options?: Parameters<typeof interpolate>[3];
  };
};

export function convertVideoPropsToFrames(
  fps: number,
  props: VideoPropsInSeconds,
  frame?: number
) {
  return {
    ...props,
    startFrom: props.startFromSeconds
      ? props.startFromSeconds * fps
      : undefined,
    endAt: props.endAtSeconds ? props.endAtSeconds * fps : undefined,
    volume:
      props.volumeInterpolate && frame
        ? interpolate(
            frame,
            convertRangeFromSecondsToFrames(
              fps,
              props.volumeInterpolate.inputRange
            ),
            props.volumeInterpolate.outputRange,
            props.volumeInterpolate.options
          )
        : props.volume,
  };
}

function convertRangeFromSecondsToFrames(
  fps: number,
  range: readonly number[]
) {
  return range.map((seconds) => seconds * fps);
}
