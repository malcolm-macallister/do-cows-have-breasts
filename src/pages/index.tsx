import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useState, useEffect } from "react";

const IndexPage: React.FC<PageProps> = () => {
  const [answer, setAnswer] = useState<string>("yeah");

  return (
    <>
      <div className="h-screen bg-[#FCF6F5] flex flex-col text-main-font">
        <div className="flex flex-row place-content-evenly mx-20 mt-28 font-light">
          <button
            onClick={() => {
              setAnswer("yeah");
            }}
          >
            <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
              do cows have breasts?
            </div>
          </button>
          <button
            onClick={() => {
              setAnswer("not really lol");
            }}
          >
            <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
              are they nice?
            </div>
          </button>
          <button
            onClick={() => {
              setAnswer("underneath the cow kinda up by their front legs");
            }}
          >
            <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
              where are they?
            </div>
          </button>
          <button
            onClick={() => {
              setAnswer("NO!");
            }}
          >
            <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
              does milk come out?
            </div>
          </button>
          <button
            onClick={() => {
              setAnswer("THE UTTER IS NOT A BREAST!");
            }}
          >
            <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
              is the utter a breast?
            </div>
          </button>
        </div>

        <div className="flex">
          <div className="m-auto">
            <div className="text-9xl mt-40 mx-20 text-center">{answer}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Do Cows Have Breasts?</title>
    <link
      rel="icon"
      href="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f404.svg"
    />{" "}
  </>
);
