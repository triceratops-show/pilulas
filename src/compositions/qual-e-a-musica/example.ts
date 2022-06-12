import type { QualEAMusicaProps } from "./QualEAMusica";

import src from "../../assets/episodio-29/sincretismo.mp3";

export const durationInSeconds = 18;
export const defaultProps: QualEAMusicaProps = {
  audio: {
    src,
  },
  sequence: {
    from: 0,
  },
};
