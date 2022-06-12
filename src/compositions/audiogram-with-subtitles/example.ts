import type { AudiogramWithSubtitlesProps } from "./AudiogramWithSubtitles";

import ep30subtitles from "../../assets/episodio-30/estragar-show.srt";

export const fps = 30;
export const durationInSeconds = 30;
export const defaultProps: AudiogramWithSubtitlesProps = {
  audio: "https://www.triceratops.show/episodios/episodio-32.mp3",
  startAudioFrom: 800 * fps,
  cover: "https://www.triceratops.show/episodios/ep-30.jpg",
  title: "#30 Tricerátops Apresenta: trema¨",
  subtitles: ep30subtitles,
};
