import { useMemo } from "react";
import parseSRT, { SubtitleItem } from "parse-srt";
import { useVideoConfig } from "remotion";

/**
 * Load subtitles from a .srt file
 * Convert start and end times to frame numbers
 * Allow selecting subtitles within a time window
 */
export const useSubtitles = (
  src: string,
  options: { windowStart?: number; windowEnd?: number } = {}
) => {
  const { windowStart = -Infinity, windowEnd = Infinity } = options;
  const config = useVideoConfig();
  const { fps } = config;

  return useMemo(() => {
    const subsWithSeconds = parseSRT(src);
    const subsWithFrameNumbers = subsWithSeconds.reduce<SubtitleItem[]>(
      (acc, item) => {
        const start = Math.floor(item.start * fps);
        const end = Math.floor(item.end * fps);

        if (start < windowStart || start > windowEnd) return acc;

        return [
          ...acc,
          {
            ...item,
            start,
            end,
          },
        ];
      },
      []
    );

    return subsWithFrameNumbers;
  }, [src, fps, windowEnd, windowStart]);
};
