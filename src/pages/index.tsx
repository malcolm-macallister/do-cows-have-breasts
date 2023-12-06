import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
];

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="flex flex-row place-content-evenly mx-20 mt-28">
        <div className="text-2xl">do cows have breasts?</div>
        <div className="text-2xl">are they nice?</div>
        <div className="text-2xl">where are they?</div>
        <div className="text-2xl">does milk come out?</div>
        <div className="text-2xl">is the utter a breast?</div>
      </div>

      <div className="flex">
        <div className="m-auto">
          <div className="text-9xl mt-40">yeah</div>
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
