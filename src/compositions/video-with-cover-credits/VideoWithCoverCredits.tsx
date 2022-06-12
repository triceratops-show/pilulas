import React from "react";
import cx from "classnames";
import {
  Audio,
  Sequence,
  Video,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { Cover } from "../../components/cover/Cover";
import { Credits } from "../../components/credits/Credits";
import { PaginatedSubtitles } from "../../components/subtitles/PaginatedSubtitles";
import {
  convertAudioPropsToFrames,
  convertSequencePropsToFrames,
  convertVideoPropsToFrames,
} from "../../unit-coversion/seconds-to-frames";
import type {
  AudioPropsInSeconds,
  SequencePropsInSeconds,
  VideoPropsInSeconds,
} from "../../unit-coversion/seconds-to-frames";
import classes from "./VideoWithCoverCredits.module.scss";

const elements = [
  "wrapper",
  "title",
  "titleText",
  "caption",
  "captionText",
] as const;

export type VideoWithCoverCreditsProps = {
  audio: {
    props: AudioPropsInSeconds;
    sequence: SequencePropsInSeconds;
  };
  subtitles: {
    src: string;
    sequence: SequencePropsInSeconds;
  };
  cover: {
    props: React.ComponentPropsWithoutRef<typeof Cover>;
    sequence: SequencePropsInSeconds;
  };
  video: {
    props: VideoPropsInSeconds;
    sequence: SequencePropsInSeconds;
  };
  credits: {
    props: React.ComponentPropsWithoutRef<typeof Credits>;
    sequence: SequencePropsInSeconds;
  };
  classes?: Partial<{
    [k in typeof elements[number]]: string;
  }>;
  styles?: Partial<{
    [k in typeof elements[number]]: React.CSSProperties;
  }>;
};

export const VideoWithCoverCredits = ({
  audio,
  subtitles,
  cover,
  video,
  credits,
  classes: classesProp,
  styles,
}: VideoWithCoverCreditsProps) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  return (
    <>
      <Sequence
        name="audio"
        {...convertSequencePropsToFrames(fps, audio.sequence)}
      >
        <Audio {...convertAudioPropsToFrames(fps, audio.props, frame)} />
      </Sequence>
      <Sequence
        name="subtitles"
        {...convertSequencePropsToFrames(fps, subtitles.sequence)}
      >
        <div className={cx(classes.subtitle)}>
          <PaginatedSubtitles
            src={subtitles.src}
            startFrame={0}
            endFrame={durationInFrames}
            linesPerPage={4}
            renderSubtitleItem={(item) => <span>{item.text}</span>}
          />
        </div>
      </Sequence>
      <Sequence
        name="cover"
        {...convertSequencePropsToFrames(fps, cover.sequence)}
      >
        <Cover {...cover.props} />
      </Sequence>
      <Sequence
        name="video"
        {...convertSequencePropsToFrames(fps, video.sequence)}
      >
        <div
          className={cx(classes.video, {
            [classes.hide]:
              frame < (cover.sequence.durationInSeconds ?? 0) * fps ||
              frame > credits.sequence.fromSeconds * fps,
          })}
        >
          <Video {...convertVideoPropsToFrames(fps, video.props, frame)} />
        </div>
      </Sequence>
      <Sequence
        name="credits"
        {...convertSequencePropsToFrames(fps, credits.sequence)}
      >
        <Credits {...credits.props} />
      </Sequence>
    </>
  );
};
