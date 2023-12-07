import * as React from "react";
import { HeadFC, Link, PageProps, graphql, useStaticQuery } from "gatsby";
import { useState, useEffect } from "react";
import Img from "gatsby-image";
import "./index.css";
import bg from "../images/cow-background8.png";
import drawing from "../images/cow-drawing.png";
import mypic from "../images/mypic.jpg";

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
  const [showPic, setShowPic] = useState<boolean>();

  return (
    <>
      <img src={bg} alt="Logo" className="z-0 absolute" />;
      <div className="flex flex-col text-main-font background relative font-lato">
        <div className="text-center">
          {" "}
          <Link to="/" className="active mx-20 underline">
            HOME
          </Link>
          <Link to="/morecowbreaststuff" className="active mx-20 underline">
            MORE COW BREAST STUFF
          </Link>
          <Link
            to="/whatisthis"
            className="mx-20 font-extrabold text-2xl underline"
          >
            WHAT IS THIS
          </Link>
        </div>
        <div className="flex flex-col text-center ">
          <div className="mx-20 mt-28 font-bold text-2xl">what is this?</div>
          <div className="mt-4 text-xl">a website about cow breasts</div>
        </div>
        <div className="flex flex-col text-center ">
          <div className="mx-20 mt-20 font-bold text-2xl">
            why did i make this?
          </div>
          <div className="mt-4 text-xl">felt like it</div>
        </div>
        <div className="flex flex-col text-center ">
          <div className="mx-20 mt-20 font-bold text-2xl">
            is the information on this website correct & accurate?
          </div>
          <div className="mt-4 text-xl">yeah</div>
        </div>
        <div className="flex flex-col text-center ">
          <div className="mx-20 mt-20 font-bold text-2xl">
            do you wanna see a pic of me i use on tinder?
          </div>
          <div className="mt-8 text-xl flex-row">
            <button
              className="mx-20 bg-amber-100 hover:bg-green-600 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
              onClick={() => {
                setShowPic(true);
              }}
            >
              yea
            </button>
            <button
              className="mx-20 bg-amber-100 hover:bg-red-600 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
              onClick={() => {
                setShowPic(false);
              }}
            >
              no
            </button>
          </div>
          {showPic === undefined ? null : showPic === true ? (
            <>
              <img
                src={mypic}
                alt="Logo"
                className="z-0 w-[400px] mx-auto mt-12"
              />{" "}
              <div className="flex flex-col text-center ">
                <div className="mx-40 mt-20 font-bold text-2xl">
                  do you think that's an okay pic to use? i have 5 other pics on
                  my profile, this isn't the best one but i still like it. my ex
                  took the pic
                </div>
                <div className="mt-8 mb-8 text-xl flex-row">
                  <button
                    className="mx-20 bg-amber-100 hover:bg-green-600 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
                    onClick={() => {
                      setShowPic(true);
                    }}
                  >
                    yea okay pic
                  </button>
                  <button
                    className="mx-20 bg-amber-100 hover:bg-red-600 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
                    onClick={() => {
                      setShowPic(false);
                    }}
                  >
                    no not that good
                  </button>
                </div>
                {showPic === undefined ? null : showPic === true ? (
                  <></>
                ) : (
                  <div className="mt-12 text-xl"></div>
                )}
              </div>
            </>
          ) : (
            <div className="mt-12 text-xl">alright</div>
          )}
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
