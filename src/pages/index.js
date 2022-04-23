import * as React from "react";
import "./index.css";
import {StaticImage} from "gatsby-plugin-image"

import Layout from '../components/layout'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "FF6768",
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
  backgroundColor: "FF6768",
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
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

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
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const imageStyle = {
  
  display: "block",
  border: "1rem solid red"
}

const mainCopyStyle = {
  display: "flex", 
  flexDirection: "column",
  justifyContent: "center"
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];


const CoffeeCup = (props) => {
  return (
    <svg
      className="coffeecup"
      id="Layer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 612 792"
      width={props.width}
      height={props.height}
    >
      <g id="WholeThing">
        <g id="CupGroup">
          <g id="CupAndHandle">
            <g id="Handle">
              <path
                className="fillGreen"
                d="M431.26,562.76a83.84,83.84,0,0,1-40-10.2,19.26,19.26,0,1,1,18.22-33.94c24.7,13.26,48.59.73,64.29-12.11,33-27,55.45-76.71,47.12-104.3-2.57-8.48-7-14.08-14.12-17.63-19.91-10-54-1.48-65.43,2.64A19.26,19.26,0,0,1,428.16,351c5.78-2.11,57.55-20,95.78-.93,16.52,8.26,28.22,22.43,33.82,41,12.9,42.65-13.85,107.81-59.6,145.25C476.77,553.82,453.67,562.76,431.26,562.76Z"
              />
              <path
                className="outlineBrown"
                d="M431.26,570a90.82,90.82,0,0,1-43.41-11.06,26.47,26.47,0,1,1,25-46.64c17,9.13,35.94,5.32,56.3-11.34C499.7,476,521.46,429,514,404.3c-2-6.55-5.21-10.64-10.45-13.27-17.56-8.83-49.83-.6-59.76,3a26.47,26.47,0,0,1-18.09-49.75c6.07-2.22,60.51-21.1,101.47-.61,18.34,9.17,31.31,24.84,37.5,45.33,13.67,45.19-14.12,113.79-61.93,152.92C480.29,560.26,455.57,570,431.26,570Zm-30.87-46.44a12.06,12.06,0,0,0-5.72,22.68c30.51,16.39,67,10.64,98.93-15.47C537.3,495,563,433.26,550.86,393.15c-5-16.59-15.44-29.25-30.14-36.6-35.57-17.78-84.61-.75-90.08,1.26a12,12,0,0,0,8.25,22.63c.44-.16,44.39-15.73,71.12-2.3,8.82,4.43,14.64,11.62,17.78,22,9.23,30.54-13.88,82.86-49.46,112C453.38,532.5,428.39,537,406.07,525A12,12,0,0,0,400.39,523.53Z"
              />
            </g>
            <g id="Cup">
              <path
                className="fillGreen"
                d="M287.56,286.58H75.69s72.46,178.18,72.46,288.9c0,71.55,46.32,67.42,78,67.42l61.45,0,61.45,0c31.64,0,78,4.13,78-67.42,0-110.72,72.46-288.9,72.46-288.9Z"
              />
              <path
                className="outlineBrown"
                d="M215.85,650.15c-18.84,0-40.81-1.23-56.45-16.77C147,621,140.94,602.1,140.94,575.49c0-108.06-71.2-284.43-71.92-286.19a7.21,7.21,0,0,1,6.67-9.93H499.43a7.22,7.22,0,0,1,6.68,9.93c-.72,1.76-71.93,178.16-71.93,286.19,0,26.61-6,45.55-18.46,57.89-17.15,17-41.94,16.88-61.83,16.75l-4.88,0-61.45,0-61.45,0-4.88,0ZM86.3,293.79c15.31,39.38,69.06,184.56,69.06,281.7,0,22.26,4.78,38.3,14.21,47.66C182.46,636,203,635.84,221.13,635.71l5,0,61.45,0,61.44,0,5,0c18.13.13,38.68.25,51.58-12.56,9.42-9.36,14.2-25.4,14.2-47.66,0-97.14,53.75-242.32,69.06-281.7Z"
              />
            </g>
          </g>
          <g id="Saucer">
            <polygon
              id="SaucerFill"
              className="fillPink"
              points="452.88 692.19 138.16 692.19 42.06 642.95 548.98 642.95 452.88 692.19"
            />
            <path
              id="SaucerOutline"
              className="outlineBrown"
              d="M452.88,699.4H138.16a7.21,7.21,0,0,1-3.28-.79l-96.1-49.25a7.2,7.2,0,0,1,3.28-13.62H549a7.21,7.21,0,0,1,3.29,13.62l-96.1,49.25A7.22,7.22,0,0,1,452.88,699.4ZM139.91,685H451.14l68-34.83H71.94Z"
            />
          </g>
          <g id="SaucerBottom">
            <rect
              id="SaucerBottomFill"
              className="fillPink"
              x="163.39"
              y="692.19"
              width="264.27"
              height="21.62"
            />
            <path
              id="SaucerBottomOutline"
              className="outlineBrown"
              d="M427.66,721H163.39a7.21,7.21,0,0,1-7.21-7.21V692.19a7.21,7.21,0,0,1,7.21-7.21H427.66a7.21,7.21,0,0,1,7.21,7.21v21.62A7.21,7.21,0,0,1,427.66,721ZM170.6,706.6H420.45v-7.2H170.6Z"
            />
          </g>
        </g>
        <path
          id="ReflectionLeft"
          className="white"
          d="M363.2,608.9a12.4,12.4,0,0,1-12.4,12.4H192.15a12.4,12.4,0,0,1-12.4-12.4h0a12.4,12.4,0,0,1,12.4-12.39H350.8a12.4,12.4,0,0,1,12.4,12.39Z"
        />
        <path
          id="ReflectionRight"
          className="white"
          d="M396,608.9a12.4,12.4,0,1,1-12.4-12.39A12.4,12.4,0,0,1,396,608.9Z"
        />
        <g id="LeftSteam">
          <path
            className="steamBrown"
            d="M198.2,259.15a10.58,10.58,0,0,1-10.48-10.63c0-12.78,10.22-18.63,17-22.49,2-1.17,5.38-3.07,6.3-4.21-.92-1.13-4.26-3-6.3-4.21-6.78-3.86-17-9.71-17-22.49s10.22-18.62,17-22.48c2-1.17,5.38-3.07,6.3-4.21-.92-1.14-4.27-3.05-6.31-4.22-6.77-3.86-17-9.7-17-22.48s10.21-18.64,17-22.5c2.06-1.18,5.42-3.1,6.33-4.24-.91-1.14-4.27-3-6.33-4.23-6.76-3.86-17-9.71-17-22.5a10.53,10.53,0,0,1,21.05,0c.55.9,4.2,3,6.38,4.24,6.77,3.86,17,9.7,17,22.49s-10.22,18.64-17,22.51c-2.05,1.17-5.41,3.09-6.32,4.22.92,1.14,4.26,3.05,6.32,4.22,6.76,3.87,17,9.71,17,22.5s-10.23,18.61-17,22.48c-2,1.16-5.38,3.07-6.31,4.2.93,1.14,4.27,3,6.32,4.22,6.76,3.86,17,9.7,17,22.48s-10.23,18.63-17,22.49c-2.19,1.24-5.83,3.33-6.46,4.42A10.4,10.4,0,0,1,198.2,259.15Z"
          />
          <path
            className="outlineBrown"
            d="M198.2,266.36a17.79,17.79,0,0,1-17.69-17.84c0-14.5,9.78-22.2,17.13-26.7-7.37-4.52-17.13-12.22-17.13-26.7s9.78-22.19,17.13-26.69c-7.39-4.54-17.13-12.24-17.13-26.7s9.81-22.23,17.16-26.74c-7.35-4.5-17.16-12.21-17.16-26.73a17.74,17.74,0,0,1,35-3.89c1.11.68,2.47,1.46,3.14,1.85,7.24,4.13,20.66,11.8,20.66,28.77,0,14.52-9.8,22.23-17.15,26.73,7.36,4.52,17.15,12.23,17.15,26.72s-9.78,22.18-17.13,26.68c7.35,4.51,17.13,12.21,17.13,26.7,0,17-13.41,24.63-20.62,28.74-.63.36-2.08,1.19-3.23,1.91A17.72,17.72,0,0,1,198.2,266.36Zm0-181.41a3.31,3.31,0,0,0-3.31,3.31c0,8,5.78,11.92,13.35,16.24,4.37,2.5,6.86,4.1,8.37,6a7.23,7.23,0,0,1,0,9c-1.51,1.86-4,3.47-8.37,6-7.57,4.32-13.35,8.26-13.35,16.24s5.78,11.9,13.35,16.22c4.49,2.57,6.85,4.09,8.34,5.94a7.21,7.21,0,0,1,0,9.07c-1.5,1.86-3.87,3.39-8.29,5.92-7.61,4.34-13.4,8.27-13.4,16.24s5.79,11.91,13.36,16.23c4.46,2.55,6.83,4.08,8.33,5.94a7.2,7.2,0,0,1,0,9.08c-1.49,1.83-3.83,3.35-8.2,5.86-7.69,4.38-13.48,8.32-13.48,16.29a3.4,3.4,0,0,0,3.27,3.42,3.21,3.21,0,0,0,3.28-3.21,7.18,7.18,0,0,1,1-3.59c1.39-2.41,3.83-4.07,9.14-7.1,7.56-4.32,13.35-8.25,13.35-16.22s-5.79-11.9-13.35-16.22c-4.35-2.48-6.83-4.08-8.34-5.93a7.2,7.2,0,0,1,0-9.11c1.5-1.84,3.86-3.36,8.26-5.87,7.63-4.36,13.42-8.29,13.42-16.25s-5.78-11.9-13.33-16.23c-4.38-2.49-6.87-4.09-8.37-6a7.21,7.21,0,0,1,0-9c1.5-1.88,4-3.49,8.37-6,7.56-4.33,13.35-8.27,13.35-16.25s-5.79-11.91-13.35-16.23c-5.6-3.21-7.66-4.62-9-6.72a7.18,7.18,0,0,1-1.07-3.78A3.32,3.32,0,0,0,198.24,85Z"
          />
        </g>
        <g id="MiddleSteam">
          <path
            className="steamBrown"
            d="M283.8,259.15a10.58,10.58,0,0,1-10.48-10.63c0-12.78,10.22-18.63,17-22.49,2-1.17,5.38-3.07,6.31-4.21-.93-1.13-4.27-3-6.31-4.21-6.77-3.86-17-9.71-17-22.49s10.22-18.62,17-22.48c2-1.17,5.38-3.07,6.31-4.21-.92-1.14-4.27-3.05-6.31-4.22-6.77-3.86-17-9.7-17-22.48s10.22-18.64,17-22.5c2-1.18,5.4-3.1,6.32-4.24-.92-1.14-4.27-3-6.32-4.23-6.77-3.86-17-9.71-17-22.5a10.52,10.52,0,0,1,21,0c.56.9,4.21,3,6.39,4.24,6.76,3.86,17,9.7,17,22.49s-10.23,18.64-17,22.51c-2.06,1.17-5.4,3.09-6.32,4.22.92,1.14,4.26,3.05,6.31,4.22,6.77,3.87,17,9.71,17,22.5s-10.23,18.61-17,22.48c-2.05,1.16-5.38,3.07-6.3,4.2.92,1.14,4.26,3,6.3,4.22,6.77,3.86,17,9.7,17,22.48s-10.23,18.63-17,22.49c-2.17,1.24-5.82,3.33-6.46,4.42A10.39,10.39,0,0,1,283.8,259.15Z"
          />
          <path
            className="outlineBrown"
            d="M283.8,266.36a17.79,17.79,0,0,1-17.69-17.84c0-14.49,9.78-22.19,17.13-26.7-7.35-4.51-17.13-12.21-17.13-26.7s9.78-22.19,17.13-26.69c-7.39-4.54-17.13-12.24-17.13-26.7s9.81-22.23,17.16-26.74c-7.38-4.51-17.16-12.22-17.16-26.73a17.73,17.73,0,0,1,35-3.9c1.14.7,2.52,1.49,3.2,1.88C311.55,90.36,325,98,325,115c0,14.51-9.81,22.22-17.15,26.73,7.36,4.52,17.15,12.22,17.15,26.72s-9.78,22.18-17.13,26.69c7.35,4.5,17.13,12.2,17.13,26.69,0,17-13.42,24.64-20.63,28.75-.71.4-2.12,1.21-3.24,1.91A17.7,17.7,0,0,1,283.8,266.36Zm0-181.41a3.32,3.32,0,0,0-3.32,3.31c0,8,5.79,11.92,13.36,16.24,4.51,2.58,6.88,4.12,8.37,6a7.18,7.18,0,0,1,0,9c-1.48,1.86-3.83,3.38-8.22,5.9-7.72,4.41-13.51,8.35-13.51,16.33s5.79,11.9,13.36,16.22c4.49,2.57,6.84,4.09,8.34,5.94a7.21,7.21,0,0,1,0,9.1c-1.51,1.85-3.88,3.38-8.31,5.9-7.58,4.33-13.37,8.26-13.37,16.23s5.8,11.91,13.37,16.23c4.43,2.54,6.8,4.07,8.31,5.91a7.22,7.22,0,0,1,0,9.14c-1.5,1.82-3.84,3.33-8.21,5.84-7.67,4.37-13.46,8.31-13.46,16.28a3.4,3.4,0,0,0,3.28,3.42,3.17,3.17,0,0,0,3.27-3.21,7.24,7.24,0,0,1,1-3.63c1.38-2.37,3.81-4,9.06-7,7.63-4.35,13.42-8.29,13.42-16.26s-5.79-11.9-13.36-16.22c-4.35-2.48-6.83-4.08-8.34-5.94a7.21,7.21,0,0,1,0-9.1c1.52-1.86,4.1-3.51,8.33-5.91,7.56-4.31,13.35-8.25,13.35-16.21s-5.79-11.91-13.35-16.23c-4.36-2.48-6.84-4.08-8.35-5.94a7.21,7.21,0,0,1,0-9.08c1.53-1.88,4.12-3.55,8.36-6,7.56-4.32,13.35-8.26,13.35-16.24s-5.78-11.9-13.35-16.23c-5.56-3.19-7.63-4.59-8.93-6.67a7.22,7.22,0,0,1-1.1-3.83A3.31,3.31,0,0,0,283.84,85Z"
          />
        </g>
        <g id="RightSteam">
          <path
            className="steamBrown"
            d="M369.39,259.15a10.59,10.59,0,0,1-10.49-10.63c0-12.78,10.23-18.63,17-22.49,2.05-1.17,5.38-3.07,6.31-4.21-.93-1.13-4.26-3-6.31-4.21-6.77-3.86-17-9.71-17-22.49s10.23-18.62,17-22.48c2.05-1.17,5.38-3.07,6.31-4.21-.92-1.14-4.27-3.05-6.31-4.22-6.77-3.86-17-9.7-17-22.48s10.23-18.64,17-22.5c2.06-1.18,5.42-3.1,6.33-4.24-.91-1.14-4.27-3-6.33-4.23-6.76-3.86-17-9.71-17-22.5a10.53,10.53,0,0,1,21.05,0c.55.9,4.21,3,6.4,4.24,6.75,3.86,17,9.7,17,22.49s-10.23,18.64-17,22.51c-2,1.17-5.4,3.09-6.32,4.22.92,1.14,4.27,3.05,6.32,4.22,6.76,3.87,17,9.71,17,22.5s-10.23,18.61-17,22.48c-2,1.16-5.39,3.07-6.32,4.2.93,1.14,4.27,3,6.32,4.22,6.76,3.86,17,9.7,17,22.48s-10.23,18.63-17,22.49c-2.19,1.24-5.84,3.33-6.47,4.42A10.39,10.39,0,0,1,369.39,259.15Z"
          />
          <path
            className="outlineBrown"
            d="M369.39,266.36a17.78,17.78,0,0,1-17.69-17.84c0-14.49,9.78-22.19,17.13-26.7-7.35-4.51-17.13-12.22-17.13-26.7s9.78-22.19,17.13-26.7c-7.42-4.56-17.13-12.25-17.13-26.69s9.81-22.23,17.16-26.74c-7.35-4.49-17.16-12.2-17.16-26.73a17.73,17.73,0,0,1,35-3.89c1.13.69,2.49,1.47,3.17,1.85C397.14,90.36,410.54,98,410.54,115c0,14.52-9.8,22.22-17.15,26.73,7.35,4.51,17.15,12.22,17.15,26.72s-9.78,22.18-17.13,26.69c7.35,4.5,17.13,12.2,17.13,26.69,0,17-13.42,24.64-20.63,28.75-.69.39-2.1,1.2-3.23,1.9A17.7,17.7,0,0,1,369.39,266.36Zm0-181.41a3.32,3.32,0,0,0-3.32,3.31c0,8,5.79,11.92,13.36,16.24,4.38,2.5,6.87,4.11,8.38,6a7.2,7.2,0,0,1,0,9c-1.51,1.88-4,3.49-8.38,6-7.57,4.32-13.36,8.26-13.36,16.24s5.8,11.9,13.37,16.22c4.53,2.6,6.86,4.11,8.35,6a7.21,7.21,0,0,1,0,9.07c-1.52,1.86-4,3.46-8.33,5.92-7.56,4.32-13.36,8.26-13.36,16.22s5.8,11.91,13.37,16.23c4.32,2.46,6.8,4.06,8.32,5.92a7.21,7.21,0,0,1,0,9.12c-1.5,1.84-4,3.43-8.31,5.9-7.57,4.32-13.37,8.26-13.37,16.23a3.4,3.4,0,0,0,3.28,3.42,3.17,3.17,0,0,0,3.28-3.21,7.17,7.17,0,0,1,.95-3.59c1.39-2.4,3.83-4.06,9.13-7.09,7.58-4.32,13.37-8.26,13.37-16.23s-5.79-11.9-13.36-16.22c-4.34-2.48-6.81-4.08-8.31-5.91a7.22,7.22,0,0,1,0-9.15c1.51-1.83,3.87-3.35,8.28-5.86,7.6-4.34,13.39-8.28,13.39-16.24s-5.78-11.91-13.34-16.23c-4.47-2.55-6.86-4.09-8.36-6a7.21,7.21,0,0,1,0-9c1.49-1.87,3.86-3.4,8.27-5.93,7.66-4.38,13.45-8.32,13.45-16.3s-5.78-11.9-13.34-16.23c-5.6-3.2-7.67-4.62-9-6.72a7.09,7.09,0,0,1-1.07-3.78A3.32,3.32,0,0,0,369.43,85Z"
          />
        </g>
        <g id="Face">
          <g id="Eyes">
            <path
              className="outlineBrown"
              d="M233.48,431.92A18.91,18.91,0,1,1,214.58,413,18.9,18.9,0,0,1,233.48,431.92Z"
            />
            <path
              className="white"
              d="M226.51,425.7a8,8,0,1,1-8-8A8,8,0,0,1,226.51,425.7Z"
            />
            <path
              className="outlineBrown"
              d="M379.45,431.92A18.9,18.9,0,1,1,360.55,413,18.9,18.9,0,0,1,379.45,431.92Z"
            />
            <path
              className="white"
              d="M372.49,425.7a8,8,0,1,1-7.95-8A8,8,0,0,1,372.49,425.7Z"
            />
          </g>
          <g id="Mouth">
            <path
              className="outlineBrown"
              d="M287.57,491.8a31.76,31.76,0,0,1-31.72-31.72,4,4,0,0,1,8,0,23.76,23.76,0,1,0,47.51,0,4,4,0,1,1,8,0A31.75,31.75,0,0,1,287.57,491.8Z"
            />
          </g>
          <g id="Cheeks">
            <path
              className="cheekPink"
              d="M387.52,474c0,8.79-12.18,15.92-27.2,15.92s-27.19-7.13-27.19-15.92S345.3,458,360.32,458,387.52,465.16,387.52,474Z"
            />
            <path
              className="cheekPink"
              d="M242,474c0,8.79-12.17,15.92-27.2,15.92s-27.19-7.13-27.19-15.92S199.79,458,214.8,458,242,465.16,242,474Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div style={mainCopyStyle}>
        <p>Hi!</p>
        <p>I'm Michael Luebbers, a junor React and Gatsby developer with over 10 years of other IT experience. I specialize in front-end development and design, SQL, and integrating graphics with dynamic content.</p><p>Please have a look around for more information about me and to look at my portfolio!</p>
      <StaticImage
        className={imageStyle} 
        alt="Blogging" 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        layout="fixed"
        />
      {/*<StaticImage alt="Owls can sit criss-cross applesauce. My life has improved significantly since finding this out." src="../images/OwlsCanSit.jpg"/>*/}
      </div>
      </Layout>
  );
};

export default IndexPage;



/*
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p className="CoffeeCup"><CoffeeCup /></p>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>*/
