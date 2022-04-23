import * as React from 'react'
import Layout from '../components/layout'
import StaticImage from "gatsby-plugin-image"
import WordikImg from "../images/Wordik.jpg"
import EnvelopeImg from "../images/EnvelopeCalendering.png"
import "./portfolio.css"
import bg from '../images/AdobeStock_234183776.jpg'

const Card = ({ title, imageName, description }) => {

  return (

    <div className="PortfolioCard">
      <div className="Title">
        <h2>{title}</h2>
      </div>
      <div className="Image">
        <img src={imageName} alt={title} />
      </div>
      <div className="CardDescription">{description}</div>
    </div>


  )
}

const Portfolio = () => {

  const projectList =
    [{
      title: "Wordik",
      description: "A fun game where the goal is to line up the letter tiles to make the goal word",
      imageName: WordikImg
    }, {
      title: "Envelope Calendaring",
      description: "A project and task scheduler, with support for dragging and dropping",
      imageName: EnvelopeImg
    }]

  const displayProjects = projectList.map(item => {
    return <Card title={item.title} description={item.description} imageName={item.imageName} />
  })

  console.log(displayProjects)

  return (
      <Layout pageTitle="Portfolio">
        <div className="portfolio">
          {displayProjects}
        </div>
      </Layout>
  )
}

export default Portfolio

/*
    <div style={{
      height: "100vmin",
      backgroundImage: `url(${bg})`,
      backgroundSize: `cover`
    }}>*/
