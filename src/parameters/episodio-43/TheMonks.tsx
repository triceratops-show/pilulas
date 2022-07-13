import { VideoWithCoverCredits, VideoWithCoverCreditsProps } from "../../compositions/video-with-cover-credits/VideoWithCoverCredits";

import coverImg from "../../assets/episodio-43/the-monks-cover.jpg";
import videoSrc from "../../assets/episodio-43/the-monks.webm";

export const durationInSeconds = 58.1; // 58.1
const props: VideoWithCoverCreditsProps = {
  cover: {
    props: {
      title: "The Monks – Monk Chant",
      caption: "(1966)",
      img: {
        src: coverImg,
        style: {
          // width: "calc(656px * 2.75)",
          // height: "calc(480px * 2.75)",
          // maxWidth: "none",
          // position: "absolute",
          // left: "-700px",
          // top: "calc((1920px - 480px * 2.75)/2)",
          // objectFit: "fill",
          objectFit: "contain",
        },
      },
      font: "walrus",
      styles: {
        wrapper: {
          backgroundColor: "#1a1b1e",
          overflow: "hidden",
          zIndex: 10,
        },
        content: {
          // paddingBottom: "11rem",
          padding: "2rem",
          paddingBottom: "3rem",
        },
        title: {
          display: "block",
          fontSize: "1.45rem",
        },
        titleText: {
          backgroundColor: "#ffffff",
        },
        caption: {
          fontSize: "1.25rem",
          textAlign: "right",
          // paddingInline: "3rem",
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
    credits: "vídeo: youtube.com/c/beatclub",
    props: {
      src: videoSrc,
      startFromSeconds: 65, // 8 ou 14
      style: {
        width: "100%",
        height: "100%",
        // objectFit: "cover",
        "objectFit": "contain",
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
        cover: "https://www.triceratops.show/episodios/episodio-43.jpg",
        title: "Episódio #43 Psicodelia Junina",
      },
      font: "walrus",
    },
    sequence: {
      fromSeconds: durationInSeconds - 3,
      durationInSeconds: 3,
    },
  },
};

export const TheMonks = () => (
  <VideoWithCoverCredits {...props} />
);
