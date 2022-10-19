import { VideoWithCoverCredits, VideoWithCoverCreditsProps } from "../../compositions/video-with-cover-credits/VideoWithCoverCredits";

import audioSrc from "../../assets/episodio-47/47.mp3";
import coverSrc from  "../../assets/episodio-47/47.png";
import subtitlesSrc from  "../../assets/episodio-47/47.srt";

export const durationInSeconds = 20;
const props: VideoWithCoverCreditsProps = {
  audio: {
    props: {
      src: audioSrc,
    },
    sequence: {
      fromSeconds: 0,
    },
  },
  cover: {
    props: {
      img: {
        src: coverSrc,
        style: {
          objectPosition: "0 -3rem",
        },
      },
      font: "walrus",
      title: "???",
      styles: {
        wrapper: {
          backgroundColor: "#e65268",
        },
        title: {
          color: "white",
          fontSize: "3rem",
          position: "absolute",
          top: "34%",
          left: "15%"
        },
      },
    },
    sequence: {
      fromSeconds: 0,
    },
  },
  audioviz: {
    props: {
      src: audioSrc,
      baseBarHeight: 500,
      styles: {
        wrapper: {
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "11%",
        },
        wave: {
          backgroundColor: "white",
        },
      },
    },
    sequence: {
      fromSeconds: 0,
    },
  },
  subtitles: {
    src: subtitlesSrc,
    sequence: {
      fromSeconds: 0,
      durationInSeconds: durationInSeconds - 3,
    },
  },
  styles: {
    subtitle: {
      fontSize: "1.25rem",
      bottom: "25%",
    },
  },
  credits: {
    props: {
      episode: {
        // cover: "https://www.triceratops.show/episodios/episodio-47.jpg",
        title: "Tudo isso e nada mais em",
      },
      font: "walrus",
      styles: {
        wrapper: {
          backgroundColor: "#ffe4ed",
          color: "#202020",
        },
        title: {
          paddingBlockEnd: "2rem",
        },
        subtitle: {
          paddingBlockEnd: "2rem",
        },
        social: {
        },
      },
    },
    sequence: {
      fromSeconds: durationInSeconds - 3,
      durationInSeconds: 3,
    },
  },
};

export const Teaser = () => (
  <VideoWithCoverCredits {...props} />
);
