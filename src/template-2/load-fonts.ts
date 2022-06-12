import { continueRender, delayRender, staticFile } from "remotion";

const waitForFont = delayRender();
const font = new FontFace(
  "ComicZine",
  `url(${staticFile("fonts/comic_zine_ot.otf")})`
);

font
  .load()
  .then(() => {
    console.log("loaded font");
    document.fonts.add(font);
    continueRender(waitForFont);
  })
  .catch((err) => {
    console.log("Error loading font", err);
  });
