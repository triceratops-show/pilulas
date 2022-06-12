import React from "react";
import { SubtitleItem } from "parse-srt";
import { useCurrentFrame, useVideoConfig, VideoConfig } from "remotion";

import { useSubtitles } from "./useSubtitles";

export type SubtitlesProps = {
  src: string;
  startFrame?: number;
  endFrame?: number;
  renderSubtitleItem?: (
    item: SubtitleItem,
    frame: number,
    config: VideoConfig
  ) => React.ReactNode;
};

export const Subtitles: React.FC<SubtitlesProps> = ({
  src,
  startFrame,
  endFrame,
  renderSubtitleItem = (item) => <span>{item.text}</span>,
}) => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();
  const subtitles = useSubtitles(src, {
    windowStart: startFrame,
    windowEnd: endFrame,
  });

  return (
    <>
      {subtitles.map((item) => (
        <React.Fragment key={item.id}>
          {renderSubtitleItem(item, frame, config)}
        </React.Fragment>
      ))}
    </>
  );
};
