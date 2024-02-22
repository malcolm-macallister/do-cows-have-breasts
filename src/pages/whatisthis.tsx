import * as React from "react";
import { HeadFC, Link, PageProps, graphql, useStaticQuery } from "gatsby";
import { useState, useEffect } from "react";
import Img from "gatsby-image";
import "./index.css";
import bg from "../images/cow-background8.png";
import drawing from "../images/cow-drawing.png";
import mypic from "../images/mypic.png";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, set, get, child } from "firebase/database";

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
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8U2tVv0aJy9A0diRsaBL2aTkaq5h1E3A",
    authDomain: "dchb-fab65.firebaseapp.com",
    databaseURL: "https://dchb-fab65-default-rtdb.firebaseio.com",
    projectId: "dchb-fab65",
    storageBucket: "dchb-fab65.appspot.com",
    messagingSenderId: "749661034776",
    appId: "1:749661034776:web:1da9e4aee61060b7af266d",
    measurementId: "G-GSHE8850WQ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  const [showPic, setShowPic] = useState<boolean>();
  const [noPercentage, setNoPercentage] = useState<number>();
  const [yesPercentage, setYesPercentage] = useState<number>();
  const [noPercentageString, setNoPercentageString] = useState<string>();
  const [yesPercentageString, setYesPercentageString] = useState<string>();

  const yesVote = () => {
    const db = getDatabase();

    const dbRef = ref(getDatabase());
    get(child(dbRef, `noVotes/`))
      .then((snapshotNo) => {
        get(child(dbRef, `yesVotes/`)).then((snapshotYes) => {
          if (snapshotYes.exists()) {
            console.log(snapshotYes.val());
            let newYesNum = snapshotYes.val().yesVotes;
            newYesNum++;
            console.log(newYesNum);

            let noNum = snapshotNo.val().noVotes;

            if (noNum > newYesNum) {
              let fullPercent = (newYesNum / noNum) * 100;
              const slicedPercent = Number(fullPercent!.toString().slice(0, 2));

              setYesPercentage(slicedPercent);
            } else if (newYesNum > noNum) {
              console.log("sup");
              console.log(noNum + "  " + newYesNum);
              let fullPercent = (noNum / newYesNum) * 100;
              const slicedPercent = Number(fullPercent!.toString().slice(0, 2));

              setYesPercentage(slicedPercent);
            } else {
              setYesPercentage(50);
            }

            set(ref(db, "yesVotes/"), {
              yesVotes: newYesNum,
            });
          } else {
            console.log("No data available");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const noVote = () => {
    const db = getDatabase();

    const dbRef = ref(getDatabase());
    get(child(dbRef, `yesVotes/`))
      .then((snapshotYes) => {
        get(child(dbRef, `noVotes/`)).then((snapshotNo) => {
          if (snapshotNo.exists()) {
            console.log(snapshotNo.val());
            let newNoNum = snapshotNo.val().noVotes;
            newNoNum++;
            console.log(newNoNum);

            let yesNum = snapshotYes.val().yesVotes;

            if (yesNum > newNoNum) {
              let fullPercent = (newNoNum / yesNum) * 100;
              const slicedPercent = Number(fullPercent!.toString().slice(0, 2));

              setNoPercentage(slicedPercent);
            } else if (newNoNum > yesNum) {
              let fullPercent = (yesNum / newNoNum) * 100;
              const slicedPercent = Number(fullPercent!.toString().slice(0, 2));

              setNoPercentage(slicedPercent);
            } else {
              setNoPercentage(50);
            }

            set(ref(db, "noVotes/"), {
              noVotes: newNoNum,
            });
          } else {
            console.log("No data available");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                      yesVote();
                    }}
                  >
                    yea okay pic
                  </button>

                  <button
                    className="mx-20 bg-amber-100 hover:bg-red-600 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
                    onClick={() => {
                      noVote();
                    }}
                  >
                    no not that good
                  </button>
                  {yesPercentage === undefined ? null : (
                    <div className="mt-12 text-green-600 flex-col">
                      {yesPercentage}% of people who voted agree with you
                    </div>
                  )}
                  {noPercentage === undefined ? null : (
                    <div className="mt-12 text-red-600">
                      {noPercentage}% of people who voted agree with you
                    </div>
                  )}
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
