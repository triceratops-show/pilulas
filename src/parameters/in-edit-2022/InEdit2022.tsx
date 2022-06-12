import { Img } from "remotion";

import { CarouselImg } from "../../components/carousel-img/CarouselImg";

import classes from "./InEdit2022.module.scss";

import cover from "../../assets/in-edit-2022/cover.jpg";
import logo from "../../assets/in-edit-2022/logo.png";
import img1 from "../../assets/in-edit-2022/1-freakscene.png";
import img2 from "../../assets/in-edit-2022/2-lydia-lunch.webp";
import img3 from "../../assets/in-edit-2022/3-pardinhos.png";
import img4 from "../../assets/in-edit-2022/4-tambores.jpg";
import img5 from "../../assets/in-edit-2022/5-manguebit.jpg";
import img6 from "../../assets/in-edit-2022/6-courtney.jpg";
import img7 from "../../assets/in-edit-2022/7-flaming-lips.jpg";
import img8 from "../../assets/in-edit-2022/8-queremo-roque.jpg";

export const Cover = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: cover,
    }}
  >
    <Img src={logo} className={classes.logo} />
    <div>
      <h1>
        <span>Tricerátops Show indica</span>
      </h1>
      <h2>
        <span>O que assistir no Festival In-Edit</span>
      </h2>
    </div>
  </CarouselImg>
);

export const Img1 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img1,
    }}
  >
    <div>
      <h2>
        <span>Freakscene: The Story of Dinosaur Jr.</span>
      </h2>
      <h1>
        <span>Alemanha e Estados Unidos | 2021 | 82min</span>
      </h1>
    </div>
  </CarouselImg>
);

export const Img2 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img2,
      style: {
        objectPosition: "15%",
      },
    }}
  >
    <div style={{ textAlign: "right" }}>
      <h4>
        <span>(online!)</span>
      </h4>
      <h2>
        <span>Lydia Lunch: The War Is Never Over</span>
      </h2>
      <h1>
        <span>Estados Unidos | 2019 | 74min</span>
      </h1>
    </div>
  </CarouselImg>
);

export const Img3 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img3,
    }}
    styles={{
      content: { justifyContent: "flex-start" },
    }}
  >
    <div>
      <h4>
        <span>(online!)</span>
      </h4>
      <h2>
        <span>Sobre Pardinhos e Afrocaipiras</span>
      </h2>
      <h1>
        <span>Brasil | 2021 | 27min</span>
      </h1>
    </div>
  </CarouselImg>
);

export const Img4 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img4,
    }}
  >
    <div>
      <h4>
        <span>(online!)</span>
      </h4>
      <h2>
        <span>Tambores da Diáspora</span>
      </h2>
      <h1>
        <span>Brasil | 2021 | 73min</span>
      </h1>
    </div>
  </CarouselImg>
);

export const Img5 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img5,
    }}
  >
    <div style={{ textAlign: "right" }}>
      <h4>
        <span>(online!)</span>
      </h4>
      <h2>
        <span>Manguebit</span>
      </h2>
      <h1>
        <span>Brasil | 2022 | 101min</span>
      </h1>
    </div>
  </CarouselImg>
);

export const Img6 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img6,
      style: {
        objectPosition: "bottom",
      },
    }}
    styles={{
      content: { justifyContent: "flex-start" },
    }}
  >
    <div>
      <h4>
        <span>(online!)</span>
      </h4>
      <h2>
        <span>Anonymous Club</span>
      </h2>
      <h1>
        <span>Austrália | 2021 | 83min</span>
      </h1>
      <h3>
        <span>(sobre a turnê da Courtney Barnett)</span>
      </h3>
    </div>
  </CarouselImg>
);

export const Img7 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img7,
    }}
    styles={{
      content: { justifyContent: "flex-start" },
    }}
  >
    <div style={{ textAlign: "right" }}>
      <h2>
        <span>Flaming Lips – Space Bubble Film</span>
      </h2>
      <h1>
        <span>Estados Unidos | 2022 | 86min</span>
      </h1>
      <h3>
        <span>(show durante a pandemia onde a plateia também entra na bolha)</span>
      </h3>
    </div>
  </CarouselImg>
);

export const Img8 = () => (
  <CarouselImg
    preset="walrus"
    img={{
      src: img8,
    }}
  >
    <div>
      <h4>
        <span>(online!)</span>
      </h4>
      <h2>
        <span>Queremo róque!</span>
      </h2>
      <h1>
        <span>Brasil | 2021 | 83min</span>
      </h1>
      <h3>
        <span>(sobre a clássica banda Repolho, de Chapecó)</span>
      </h3>
    </div>
  </CarouselImg>
);

export const InEdit = Img8;
