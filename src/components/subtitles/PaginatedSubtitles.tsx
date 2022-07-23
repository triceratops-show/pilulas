import React, { useEffect, useRef, useState } from "react";
import { SubtitleItem } from "parse-srt";
import { useCurrentFrame, useVideoConfig, VideoConfig } from "remotion";

import { useSubtitles } from "./useSubtitles";

export type PaginatedSubtitlesProps = {
  src: string;
  startFrame?: number;
  endFrame?: number;
  linesPerPage: number;
  renderSubtitleItem?: (
    item: SubtitleItem,
    frame: number,
    config: VideoConfig
  ) => React.ReactNode;
};

type PaginationLine = {
  index: number;
  offsetTop: number;
};

export const PaginatedSubtitles: React.FC<PaginatedSubtitlesProps> = ({
  src,
  startFrame,
  endFrame,
  renderSubtitleItem = (item) => <span>{item.text}</span>,
}) => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const frame = useCurrentFrame();
  const config = useVideoConfig();
  const subtitles = useSubtitles(src, {
    windowStart: startFrame,
    windowEnd: endFrame,
  });
  const [lines, setLines] = useState<PaginationLine[]>([]);

  useEffect(() => {
    const pageElement = pageRef.current;

    if (!pageElement) return;

    const lineOffsets = Array.from(pageElement.childNodes).reduce<
      PaginationLine[]
    >((acc, item) => {
      const { offsetTop, id } = item as HTMLElement;
      const lastOffsetTop = acc[acc.length - 1]?.offsetTop;

      if (lastOffsetTop === offsetTop) return acc;

      return [...acc, { index: Number(id), offsetTop }];
    }, []);

    setLines(lineOffsets);
  }, [frame]);

  const currentSubtitleItem = subtitles
    .slice()
    .reverse()
    .find((item) => item.start <= frame);

  if (!currentSubtitleItem) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <div>
        <span key={currentSubtitleItem.id} id={String(currentSubtitleItem.id)}>
          {renderSubtitleItem(currentSubtitleItem, frame, config)}
        </span>
      </div>
    </div>
  );
};
