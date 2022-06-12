import React from "react";
import { Img } from "remotion";

import type { CarouselImgProps } from "./CarouselImg";

export const defaultProps: CarouselImgProps = {
  preset: "walrus",
  img: {
    src: "https://www.triceratops.show/episodios/22.jpg",
  },
  children: [
    <Img
      src="https://br.in-edit.org/wp-content/uploads/2022/05/IN-EDIT-BRASIL-logo.png"
      style={{
        position: "absolute",
        top: "18%",
        right: "8%",
        width: "390px",
      }}
    />,
    <div>
      <h1>
        <span>Tricerátops Show indica</span>
      </h1>
      <h2>
        <span>O que assistir no Festival In-Edit</span>
      </h2>
      <h3 style={{ marginInlineStart: "0.5rem" }}>
        <span>(online!)</span>
      </h3>
    </div>
  ]
};
