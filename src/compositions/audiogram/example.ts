import type { AudiogramProps } from "./Audiogram";

import src from "../../assets/episodio-29/sincretismo.mp3";

export const durationInSeconds = 18;
export const defaultProps: AudiogramProps = {
  audio: {
    src,
  },
  sequence: {
    from: 0,
  },
};
