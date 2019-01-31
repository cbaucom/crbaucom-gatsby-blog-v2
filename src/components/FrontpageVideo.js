import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {
  Player,
  BigPlayButton,
  ControlBar,
  PlaybackRateMenuButton,
} from 'video-react'

const VideoWrapper = styled.div`
  background-color: #94bae9;
  padding: 3rem 0;
  .btn {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    .lead {
      padding-top: 1rem;
    }
  }
`

const FrontpageVideo = () => (
  <VideoWrapper>
    <div className="container">
      <h2>Videos</h2>

      <div className="row">
        <div className="col-md-9 vertical-center">
          <Player
            playsInline
            poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817179/crbaucom-images/sprayAnna.jpg"
            src="https://res.cloudinary.com/crbaucom/video/upload/v1543816933/videos/sprayAnnaKillington.mp4"
          >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton
                rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                order={7.1}
              />
            </ControlBar>
          </Player>
        </div>
        <div className="col-md-3 vertical-center">
          <p className="lead">
            I like to mess around with Final Cut Pro from time to time. This one
            is my all-time favorite!
          </p>
          <Link to={'videos'} className="btn">
            View more videos
          </Link>
        </div>
      </div>
    </div>
  </VideoWrapper>
)

export default FrontpageVideo
