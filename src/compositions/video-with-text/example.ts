import type { VideoWithTextProps } from './VideoWithText';

import videoSrc from "../../assets/episodio-42/lynch.webm";

export const durationInSeconds = 12;
export const defaultProps: VideoWithTextProps = {
  video: {
    src: videoSrc,
    style: {
      height: "100%",
      objectFit: "cover",
      objectPosition: "40% 0",
    },
  },
  sequence: {
    from: 0,
  },
  styles: {
    content: {
      fontFamily: "'Kdam Thmor Pro', sans-serif",
    },
    overline: {
      backgroundColor: "#c6e2f3",
    },
    title: {
      height: "38%",
    },
    titleText: {
      backgroundColor: "#d8e9bd",
    },
    subtitle: {
      textAlign: "center",
      transform: "rotate(-5deg)",
      marginTop: "17rem",
    },
    subtitleText: {
      backgroundColor: "#fea6d2",
    },
  },
  overline: "NO AR",
  title: "O novo episódio de Tricerátops Show:",
  subtitle: "#42 Can U Believe It’s Friday Once Again?",
};
