<<<<<<< HEAD
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`query{
    site {
      siteMetadata {
        title
      }
    }
  }`)
  
  return (
    <div className={container}>
      <div className="navbar">
        <div className="title1"><Link to="/" className={navLinkText} style={{color: "black"}}>Michael</Link></div>
        <div className="links">
          <div className="link"><Link to="/portfolio" className={navLinkText}>Portfolio</Link></div>
          <div className="link">Resume</div>
          <div className="link"><Link to="/blog" className={navLinkText}>Blog</Link></div>
          <div className="link"><Link to="/links" className={navLinkText}>Links</Link></div>
        </div>
      </div>
      <div className="title2">Luebbers</div>
      <div className="body">{children}</div>
    </div>

    
  )
}

export default Layout

/*
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>*/
=======
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`query{
    site {
      siteMetadata {
        title
      }
    }
  }`)
  
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
>>>>>>> e36f31f598100f71343cb1aff0edca0cd3ddd4de
