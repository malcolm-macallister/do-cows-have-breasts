import * as React from "react";
import { HeadFC, Link, PageProps, graphql, useStaticQuery } from "gatsby";
import { useState, useEffect } from "react";
import Img from "gatsby-image";
import "./index.css";
import bg from "../images/cow-background.png";

/*const data = useStaticQuery(graphql`
    query {
      test: file(relativePath: { eq: "src/images/cow-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 3160, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
*/

const WhatIsThisPage: React.FC<PageProps> = () => {
  const [answer, setAnswer] = useState<string>("yeah");
  const [activeStylingQ1, setActiveStylingQ1] = useState<boolean>(true);
  const [activeStylingQ2, setActiveStylingQ2] = useState<boolean>(false);
  const [activeStylingQ3, setActiveStylingQ3] = useState<boolean>(false);
  const [activeStylingQ4, setActiveStylingQ4] = useState<boolean>(false);
  const [activeStylingQ5, setActiveStylingQ5] = useState<boolean>(false);

  return (
    <>
      <img src={bg} alt="Logo" className="z-0 absolute" />;
      <div className="flex flex-col text-main-font background relative font-lato">
        <div className="text-center">
          {" "}
          <Link to="/" className="active mx-20">
            HOME
          </Link>
          <Link to="/morecowbreaststuff" className="active mx-20">
            MORE COW BREAST STUFF
          </Link>
          <Link to="/whatisthis" className="mx-20 font-extrabold text-2xl">
            WHAT IS THIS
          </Link>
        </div>
        <div className="flex flex-row place-content-evenly mx-20 mt-28 font-light">
          <button
            onClick={() => {
              setAnswer("yeah");
              setActiveStylingQ1(true);
              setActiveStylingQ2(false);
              setActiveStylingQ3(false);
              setActiveStylingQ4(false);
              setActiveStylingQ5(false);
            }}
          >
            {activeStylingQ1 ? (
              <div className="font-normal text-4xl cursor-pointer">
                do cows have breasts?
              </div>
            ) : (
              <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
                do cows have breasts?
              </div>
            )}
          </button>
          <button
            onClick={() => {
              setAnswer("not really lol");
              setActiveStylingQ1(false);
              setActiveStylingQ2(true);
              setActiveStylingQ3(false);
              setActiveStylingQ4(false);
              setActiveStylingQ5(false);
            }}
          >
            {activeStylingQ2 ? (
              <div className="font-normal text-4xl cursor-pointer">
                are they nice?
              </div>
            ) : (
              <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
                are they nice?
              </div>
            )}
          </button>
          <button
            onClick={() => {
              setAnswer("underneath the cow kinda up by their front legs");
              setActiveStylingQ1(false);
              setActiveStylingQ2(false);
              setActiveStylingQ3(true);
              setActiveStylingQ4(false);
              setActiveStylingQ5(false);
            }}
          >
            {activeStylingQ3 ? (
              <div className="font-normal text-4xl cursor-pointer">
                where are they?
              </div>
            ) : (
              <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
                where are they?
              </div>
            )}
          </button>
          <button
            onClick={() => {
              setAnswer("NO!");
              setActiveStylingQ1(false);
              setActiveStylingQ2(false);
              setActiveStylingQ3(false);
              setActiveStylingQ4(true);
              setActiveStylingQ5(false);
            }}
          >
            {activeStylingQ4 ? (
              <div className="font-normal text-4xl cursor-pointer">
                does milk come out?
              </div>
            ) : (
              <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
                does milk come out?
              </div>
            )}
          </button>
          <button
            onClick={() => {
              setAnswer("THE UTTER IS NOT A BREAST!");
              setActiveStylingQ1(false);
              setActiveStylingQ2(false);
              setActiveStylingQ3(false);
              setActiveStylingQ4(false);
              setActiveStylingQ5(true);
            }}
          >
            {activeStylingQ5 ? (
              <div className="font-normal text-4xl cursor-pointer">
                is the utter a breast?
              </div>
            ) : (
              <div className="text-2xl hover:font-normal hover:text-3xl cursor-pointer">
                is the utter a breast?
              </div>
            )}
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

export default WhatIsThisPage;

export const Head: HeadFC = () => (
  <>
    <title>Do Cows Have Breasts?</title>
    <link
      rel="icon"
      href="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f404.svg"
    />{" "}
  </>
);
