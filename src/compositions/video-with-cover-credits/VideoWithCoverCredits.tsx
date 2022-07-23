import React from "react";
import cx from "classnames";
import {
  Audio,
  Sequence,
  Video,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

import { Cover } from "../../components/cover/Cover";
import { Credits } from "../../components/credits/Credits";
import { PaginatedSubtitles } from "../../components/subtitles/PaginatedSubtitles";
import {
  convertAudioPropsToFrames,
  convertSequencePropsToFrames,
  convertVideoPropsToFrames,
} from "../../helpers/seconds-to-frames";
import type {
  AudioPropsInSeconds,
  SequencePropsInSeconds,
  VideoPropsInSeconds,
} from "../../helpers/seconds-to-frames";
import { applyStyle } from "../../helpers/style";
import classes from "./VideoWithCoverCredits.module.scss";

const elements = ["video", "videoCredits", "subtitle"] as const;

export type VideoWithCoverCreditsProps = {
  audio?: {
    props: AudioPropsInSeconds;
    sequence: SequencePropsInSeconds;
  };
  subtitles?: {
    src: string;
    sequence: SequencePropsInSeconds;
  };
  cover?: {
    props: React.ComponentPropsWithoutRef<typeof Cover>;
    sequence: SequencePropsInSeconds;
  };
  video: {
    credits?: string;
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
    [k in typeof elements[number]]:
      | React.CSSProperties
      | ((fps: number, frame: number) => React.CSSProperties);
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
      {audio && (
        <Sequence
          name="audio"
          {...convertSequencePropsToFrames(fps, audio.sequence)}
        >
          <Audio {...convertAudioPropsToFrames(fps, audio.props, frame)} />
        </Sequence>
      )}
      <Sequence
        name="video"
        {...convertSequencePropsToFrames(fps, video.sequence)}
      >
        <div
          className={cx(classes.video, classesProp?.video)}
          style={applyStyle(styles?.video, fps, frame)}
        >
          {video.credits && (
            <div
              className={cx(classes.videoCredits, classesProp?.videoCredits)}
              style={applyStyle(styles?.videoCredits, fps, frame)}
            >
              {video.credits}
            </div>
          )}
          <Video {...convertVideoPropsToFrames(fps, video.props, frame)} />
        </div>
      </Sequence>
      {subtitles && (
        <Sequence
          name="subtitles"
          {...convertSequencePropsToFrames(fps, subtitles.sequence)}
        >
          <div
            className={cx(classes.subtitle, classesProp?.subtitle)}
            style={applyStyle(styles?.subtitle, fps, frame)}
          >
            <PaginatedSubtitles
              src={subtitles.src}
              startFrame={0}
              endFrame={durationInFrames}
              linesPerPage={4}
              renderSubtitleItem={(item) => <span>{item.text}</span>}
            />
          </div>
        </Sequence>
      )}
      {cover && (
        <Sequence
          name="cover"
          {...convertSequencePropsToFrames(fps, cover.sequence)}
        >
          <Cover
            {...cover.props}
            styles={{
              ...cover.props.styles,
              wrapper: {
                ...cover.props.styles?.wrapper,
                opacity: interpolate(
                  frame,
                  [
                    ((cover.sequence.durationInSeconds ?? 0) - 0.5) * fps,
                    (cover.sequence.durationInSeconds ?? 0) * fps,
                  ],
                  [1, 0]
                ),
              },
            }}
          />
        </Sequence>
      )}
      <Sequence
        name="credits"
        {...convertSequencePropsToFrames(fps, credits.sequence)}
      >
        <Credits {...credits.props} />
      </Sequence>
    </>
  );
};
