import type { ImgWithAudioProps } from "./ImgWithAudio";

import src from "../../assets/episodio-41/ep-41-bom-dia.mp3";
import bgImg from "../../assets/episodio-41/ep-37-cover-cropped.jpg";

export const durationInSeconds = 18;
export const defaultProps: ImgWithAudioProps = {
  audio: {
    src,
  },
  styles: {
    wrapper: {
      backgroundImage: `url(${bgImg})`,
      backgroundColor: "#d8e9bd",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
    },
    text: {
      height: "38%",
    },
    audioviz: {
      wave: {
        backgroundColor: "#71708e",
      },
    },
  },
  text: "Bom dia! O @triceratops.show deseja uma ótima segunda e excelente semana a todos",
  caption: "Episódio #41 Na Série B do Rock Alternativo",
};
