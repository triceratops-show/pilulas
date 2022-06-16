import {
  Composition,
  // staticFile,
} from "remotion";
import "./style.css";
import { AudiogramaComposition } from "./audiograma/Audiograma";
import { CapaFourFacesComposition } from "./capa-four-faces/CapaFourFaces";
import { PilulaComImagemComposition } from "./pilula-com-imagem/PilulaComImagem";
// import { QualEAMusicaComposition } from "./qual-e-a-musica/QualEAMusica";
import { ReelsComposition } from "./reels/Reels";
import { ReelsVideoComposition } from "./reels-video/ReelsVideo";
import { StoriesComposition } from "./stories/Stories";
import { Template2Composition } from "./template-2/Template2";
import { Template3Composition } from "./template-3/Template3";

import ep30subtitles from "./assets/episodio-30/pilula-3.srt";
//import ep32Cover from "https://www.triceratops.show/episodios/episodio-32.jpg";
//import ep32image from "https://www.triceratops.show/episodios/episodio-32.mp3";
//import ep31Cover from "./assets/episodio-31/cover.png";
//import ep31image from "./assets/episodio-31/justine1.jpg";

const fps = 30;
const durationInFrames = 90 * fps;

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="ReelsVideo"
        component={ReelsVideoComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />
      {/* <Composition
        id="Reels"
        component={ReelsComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      />
      <Composition
        id="Stories"
        component={StoriesComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      /> */}
      {/* <Composition
        id="Audiograma"
        component={AudiogramaComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      /> */}
      <Composition
        id="CapaFourFaces"
        component={CapaFourFacesComposition}
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
      {/* <Composition
        id="PilulaComImagem"
        component={PilulaComImagemComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1080}
      /> */}
      {/* <Composition
        id="QualEAMusica"
        component={QualEAMusicaComposition}
        fps={fps}
        durationInFrames={18 * fps}
        width={1080}
        height={1080}
        defaultProps={{
          audio: staticFile("/Shocking_Blue-Love-Buzz.mp3"),
          startAudioFrom: fps * 0,
        }}
      /> */}
      {/* <Composition
        id="Template2"
        component={Template2Composition}
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
        component={Template3Composition}
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
      /> */}
    </>
  );
};
