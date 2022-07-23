import { VideoWithCoverCredits, VideoWithCoverCreditsProps } from "../../compositions/video-with-cover-credits/VideoWithCoverCredits";

import subtitlesSrc from "../../assets/dia-do-rock/the-strokes.srt";
import audioSrc from "../../assets/dia-do-rock/the-strokes.mp3";
import videoSrc from "../../assets/dia-do-rock/the-strokes.webm";

export const durationInSeconds = 90;
const props: VideoWithCoverCreditsProps = {
  styles: {
    subtitle: {
      fontSize: "1.125rem",
      paddingBottom: "7rem",
    },
  },
  audio: {
    props: {
      src: audioSrc,
    },
    sequence: {
      fromSeconds: 10,
    },
  },
  subtitles: {
    src: subtitlesSrc,
    sequence: {
      fromSeconds: 10,
      durationInSeconds: 67,
    },
  },
  cover: {
    props: {
      title: "O fenômeno de Is This It do Strokes",
      caption: "Por Mario Bross, do Wry",
      font: "walrus",
      styles: {
        wrapper: {
          overflow: "hidden",
          zIndex: 10,
        },
        content: {
          padding: "2rem",
          paddingBottom: "3rem",
        },
        title: {
          display: "block",
          fontSize: "1.75rem",
          marginBottom: "8rem",
        },
        titleText: {
          backgroundColor: "#ffffff",
        },
        caption: {
          fontSize: "1.25rem",
          textAlign: "right",
          marginBottom: "7rem",
        },
        captionText: {
          backgroundColor: "#ffffff",
        },
      },
    },
    sequence: {
      fromSeconds: 0,
      durationInSeconds: 3,
    },
  },
  video: {
    props: {
      src: videoSrc,
      startFromSeconds: 8.5,
      volumeInterpolate: {
        inputRange: [0, 8, 12, 76, 79, durationInSeconds],
        outputRange: [1, 1, 0.25, 0.25, 1, 1],
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    sequence: {
      fromSeconds: 0,
      durationInSeconds: durationInSeconds,
    },
  },
  credits: {
    props: {
      episode: {
        cover: "https://www.triceratops.show/episodios/7-cover.jpg",
        title: "Episódio #7 Os 20 Anos de Is This It do Strokes",
      },
      font: "walrus",
      styles: {
        wrapper: {
          backgroundColor: "#7b5192",
        },
      },
    },
    sequence: {
      fromSeconds: durationInSeconds - 5,
      durationInSeconds: 5,
    },
  },
};

export const TheStrokes = () => (
  <VideoWithCoverCredits {...props} />
);
