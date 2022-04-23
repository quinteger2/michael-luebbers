import * as React from 'react'
import Layout from '../components/layout'
import StaticImage from "gatsby-plugin-image"
import bg from '../images/AdobeStock_234183776.jpg'

const linkStyle = {color: "white", fontSize: "1.5em", margin: "1.5em"}

const Links = () => {


  return (
    <Layout>
      <div style={{ height: "80vh", width: "80vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${bg})`, backgroundSize: `cover`, backgroundColor: "#36497E", borderRadius: "1rem" }}>
        <a style={linkStyle} href="https://www.youtube.com/channel/UCY_93LKZ98TU3LpINa4fmHg">Youtube</a>
        <a style={linkStyle} href="https://www.linkedin.com/in/mluebbers/">LinkedIn</a>
      </div>
    </Layout>)
  
}

export default Links
