import { VideoWithCoverCredits, VideoWithCoverCreditsProps } from "../../compositions/video-with-cover-credits/VideoWithCoverCredits";

import audioSrc from "../../assets/episodio-47/trailer.mp3";
import coverSrc from  "../../assets/episodio-47/trailer-2.png";
import subtitlesSrc from "../../assets/episodio-47/trailer.srt";

export const durationInSeconds = 33.5;
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
      },
    },
    sequence: {
      fromSeconds: 0,
    },
  },
  audioviz: {
    props: {
      src: audioSrc,
      baseBarHeight: 800,
      styles: {
        wrapper: {
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "1%",
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
      durationInSeconds: durationInSeconds - 4.8,
    },
  },
  credits: {
    props: {
      episode: {
        cover: "https://www.triceratops.show/episodios/episodio-47.jpg",
        title: "Episódio #47 Meditação guiada para dinossauros / Relaxa Caraio",
      },
      font: "joan",
      styles: {
        wrapper: {
          backgroundColor: "#ffa1ad",
          color: "#000000",
        },
        title: {
          fontSize: "1rem",
          paddingBlockEnd: "0.75rem",
        },
        subtitle: {
          fontSize: "0.825rem",
        },
        social: {
          fontSize: "0.825rem",
        },
      },
    },
    sequence: {
      fromSeconds: durationInSeconds - 4.8,
      durationInSeconds: 4.8,
    },
  },
  styles: {
    subtitle: {
      fontSize: "1.25rem",
      fontFamily: "Joan",
      flexDirection: "column",
      top: "50%"
    },
  },
};

export const Meditacao = () => (
  <VideoWithCoverCredits {...props} />
);
