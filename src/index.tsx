import { registerRoot } from "remotion";
import { RemotionVideo } from "./Video";
import { continueRender, staticFile, delayRender } from "remotion";

function loadFont() {
  const waitForFont = delayRender();
  const font = new FontFace(
    `ComicZine`,
    `url(${staticFile("comic_zine_ot.otf")})`
    // `url(${staticFile("Essence Sans.ttf")}) format('ttf')`
  );

  return font
    .load()
    .then(() => {
      document.fonts.add(font);
      continueRender(waitForFont);
    })
    .catch((err) => console.log("Error loading font", err));
}
function init() {
  //  loadFont();
  registerRoot(RemotionVideo);
}

init();
