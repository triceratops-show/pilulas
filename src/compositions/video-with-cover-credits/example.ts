import type { VideoWithCoverCreditsProps } from './VideoWithCoverCredits';

import audioSrc from "../../assets/episodio-42/ymo.mp3";
import subtitlesSrc from "../../assets/episodio-42/ymo.srt";
import coverImg from "../../assets/episodio-42/ymo.webp";
import videoSrc from "../../assets/episodio-42/ymo.webm";

export const durationInSeconds = 90;
export const defaultProps: VideoWithCoverCreditsProps = {
  audio: {
    props: {
      src: audioSrc,
    },
    sequence: {
      fromSeconds: 0,
    },
  },
  subtitles: {
    src: subtitlesSrc,
    sequence: {
      fromSeconds: 0,
      durationInSeconds: 76.5,
    },
  },
  cover: {
    props: {
      title: "Yellow Magic Orchestra",
      caption: "Por Luiz Terra",
      img: {
        src: coverImg,
      },
      font: "joan",
      styles: {
        title: {
          display: "block",
          fontSize: "1.7rem",
          paddingTop: "16rem",
        },
        titleText: {
          backgroundColor: "#c6e2f3",
        },
        caption: {
          fontSize: "1.125rem",
          textAlign: "right",
        },
        captionText: {
          backgroundColor: "#c6e2f3",
        },
      },
    },
    sequence: {
      fromSeconds: 0,
      durationInSeconds: 2,
    },
  },
  video: {
    props: {
      src: videoSrc,
      startFromSeconds: 7.5,
      volumeInterpolate: {
        inputRange: [0, 10, 75, 78, durationInSeconds],
        outputRange: [0.6, 0.2, 0.2, 0.6, 0.6],
      }
    },
    sequence: {
      fromSeconds: 0,
      durationInSeconds: durationInSeconds,
    },
  },
  credits: {
    props: {
      episode: {
        cover: "https://www.triceratops.show/episodios/episodio-42.jpg",
        title: "Episódio #42 Can U Believe It’s Friday Once Again?",
      },
      font: "joan",
    },
    sequence: {
      fromSeconds: 86,
      durationInSeconds: 4,
    },
  },
};
