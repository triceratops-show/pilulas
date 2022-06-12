import type { FourFacesFadeInProps } from "./FourFacesFadeIn";

export const fps = 30;
export const durationInSeconds = 16;
export const defaultProps: FourFacesFadeInProps = {
  startPhotoAt: 0,
  startCoverAt: 9 * fps,
  startAudioFrom: 70 * fps,
  startFadeOutFromLastNSeconds: 3,
  audio: "https://www.triceratops.show/episodios/episodio-32.mp3",
  cover: "https://www.triceratops.show/episodios/episodio-32.jpg",
  image:
    "https://blognroll.com.br/wp-content/uploads/2022/03/kraftwerk.jpg",
};
