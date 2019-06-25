import React, { useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { FaShippingFast } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bg from '../assets/img/lightning-pattern-trace-wide.png'

const ServicesWrapper = styled.section`
  margin: 0 auto;
  width: 100vw;
  padding: 2rem 0 1rem;
  p {
    font-size: 1.35rem;
    line-height: 1.5;
  }
  @media (min-width: 767px) {
    p {
      font-size: 1.5rem;
    }
  }
`

const SpeedWrapper = styled.section`
  width: 100%;
  /* background: linear-gradient(rgba(255, 255, 46, 0.7), rgba(255, 47, 86, 0.75)),
    url(${bg}) top; */

  background: rgb(255,130,12);
  background: linear-gradient(180deg, rgba(229,255,7,0.75) 0%, rgba(255,130,12,0.75) 100%), url(${bg}) top;
  padding: 4rem 3rem 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  svg {
    color: #023767;
    width: 100px;
    height: 100px;
  }
  @media (min-width: 767px) {
    padding: 5rem 3rem;
  }
  .left {
    grid-column: 1 / -1;
    @media (min-width: 767px) {
      grid-column: 1 / 6;
    }
  }
  .right {
    grid-column: 1 / -1;
    @media (min-width: 767px) {
      grid-column: 7 / -1;
      display: grid;
      align-content: center;
    }
  }
`

const LighthouseWrapper = styled.section`
  width: 100%;
  background: #fff;
  display: grid;
  padding: 5rem 2rem;
  text-align: center;
  /* grid-template-rows: repeat(4, 1fr); */
  .left {
    grid-row: 1;
    h4 {
      font-size: 2rem;
    }
  }
  .right {
    /* grid-row: 2 / -1; */
  }
`

const OfflineWrapper = styled.section`
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(10, 50, 115, 1) 0%,
    rgba(10, 100, 150, 1) 50%,
    rgba(10, 50, 116, 1) 100%
  );
  h2,
  p {
    color: #fff;
  }
  display: grid;
  padding: 4rem 2rem;
  grid-template-columns: repeat(8, 1fr);
  .left {
    grid-column: 1 / -1;
    @media (min-width: 600px) {
      grid-column: 1 / 5;
    }
  }
  .right {
    grid-column: 1 / -1;
    .gatsby-image-wrapper {
      max-height: 400px;
    }
    @media (min-width: 600px) {
      grid-column: 6 / -1;
      display: grid;
      align-content: center;
    }
  }
`

function Services() {
  useEffect(() => {
    AOS.init()
  }, []) // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <StaticQuery
      query={servicesQuery}
      render={data => {
        return (
          <ServicesWrapper>
            <div className="service-offers">
              <SpeedWrapper>
                <div
                  className="left"
                  data-aos="zoom-in-up"
                  data-aos-delay="100"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-center"
                >
                  <h2>Speed up your site</h2>
                  <FaShippingFast />
                </div>
                <div className="right">
                  <p>
                    Do you want your website to be super fast and secure? A
                    static site is the way to go.
                  </p>
                </div>
              </SpeedWrapper>
              <LighthouseWrapper>
                <div className="left">
                  <h4>Improve your site score</h4>
                  <p>
                    Already have a website? Audit your site using Google's free
                    automated tool,{' '}
                    <a href="https://developers.google.com/web/tools/lighthouse/">
                      Lighthouse
                    </a>
                    , to check the quality of your web page.
                  </p>
                  <p>Didn't score so well? I can help you with that.</p>
                </div>
                <div className="right">
                  <Image
                    fluid={data.lighthouseImg.childImageSharp.fluid}
                    alt="Lighthouse score improvement image"
                  />
                </div>
              </LighthouseWrapper>
              <OfflineWrapper>
                <div className="left">
                  <h2>Take your content offline</h2>
                  <p>
                    With progressive web apps and service workers, your site
                    will continue to work offline.
                  </p>
                  <p>You'll never have to see the offline dinosaur</p>
                </div>
                <div
                  className="right"
                  data-aos="slide-left"
                  data-aos-offset="200"
                  data-aos-delay="150"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                >
                  <Image
                    fluid={data.offlineImg.childImageSharp.fluid}
                    alt="Offline phone image"
                  />
                </div>
              </OfflineWrapper>
            </div>
          </ServicesWrapper>
        )
      }}
    />
  )
}

const servicesQuery = graphql`
  query ServicesQuery {
    lighthouseImg: file(
      absolutePath: { regex: "/assets/img/bad-to-good-lighthouse-score.png/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    offlineImg: file(
      absolutePath: { regex: "/assets/img/offline-android.jpg/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Services
