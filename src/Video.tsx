import { Composition } from "remotion";
import { AudiogramComposition } from "./Composition";
import { AudiogramComposition as PilulaComImagem } from "./PilulaComImagem";
import "./fonts.css";
import "./style.css";
import ep30subtitles from "./assets/episodio-30/pilula-3.srt";
import { Template1 } from "./Template1";
import { Template2 } from "./Template2";
import { Template3 } from "./Template3";

//import ep32Cover from "https://www.triceratops.show/episodios/episodio-32.jpg";
//import ep32image from "https://www.triceratops.show/episodios/episodio-32.mp3";
//import ep31Cover from "./assets/episodio-31/cover.png";
//import ep31image from "./assets/episodio-31/justine1.jpg";

const fps = 30;
const durationInFrames = 18 * fps;

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="PilulaComImagem"
        component={PilulaComImagem}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />
      <Composition
        id="Audiogram"
        component={AudiogramComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />

      <Composition
        id="Template1"
        component={Template1}
        defaultProps={{
          startPhotoAt: 0,
          startCoverAt: fps * 9,
          startAudioFrom: fps * 70,
          startFadeOutFromLastNSeconds: 3,
          audio: "https://www.triceratops.show/episodios/episodio-32.mp3",
          cover: "https://www.triceratops.show/episodios/episodio-32.jpg",
          image:
            "https://blognroll.com.br/wp-content/uploads/2022/03/kraftwerk.jpg",
        }}
        durationInFrames={Math.round(16 * fps)}
        fps={fps}
        width={1080}
        height={1080}
      />
      <Composition
        id="Template2"
        component={Template2}
        defaultProps={{
          startCoverAt: fps * 9,
          startAudioFrom: fps * 70,
          episodeText: "#32 Um Tributo Brasileiro ao Kraftwerk",
          audio: "https://www.triceratops.show/episodios/episodio-32.mp3",
          cover: "https://www.triceratops.show/episodios/episodio-32.jpg",
          image:
            "https://blognroll.com.br/wp-content/uploads/2022/03/kraftwerk.jpg",
        }}
        durationInFrames={Math.round(16 * fps)}
        fps={fps}
        width={1080}
        height={1080}
      />

      <Composition
        id="Template3"
        component={Template3}
        defaultProps={{
          audio: "https://www.triceratops.show/episodios/episodio-32.mp3",
          startAudioFrom: fps * 800,
          cover: "https://www.triceratops.show/episodios/episodio-32.jpg",
          title: "#32 Um Tributo Brasileiro ao Kraftwerk",
          subtitles: ep30subtitles,
        }}
        durationInFrames={Math.round(30 * fps)}
        fps={fps}
        width={1080}
        height={1080}
      />
    </>
  );
};
