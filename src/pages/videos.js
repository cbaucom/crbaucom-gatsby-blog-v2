import React, { Component } from 'react'
import {
  Player,
  BigPlayButton,
  ControlBar,
  PlaybackRateMenuButton,
} from 'video-react'
import '../assets/css/video-react.css'
import '../assets/css/bootstrap-grid.css'
import Layout from '../components/Layout'

export default class Frontpage extends Component {
  render() {
    return (
      <Layout>
        <div className="container Videos">
          <h1 className="pt2">My Videos</h1>
          <hr />
          <div className="container row">
            <section className="col-md-6">
              <article className="Card small">
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
                <div className="content">
                  <h3 className="Title">
                    Skiing Killington.{' '}
                    <span className="muted">Personal Favorite.</span>
                  </h3>
                  <p className="excerpt">
                    Anna gets a face full of snow while Jerry, in the
                    background, does cart-wheels down the mountain. The best!
                  </p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817180/crbaucom-images/timelapsecover.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543816990/videos/TimeLapse.mov"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Working man.</h3>
                  <p className="excerpt">
                    Timelapse of putting new hard wood floor down. Featuring Sam
                    the cat, and some cookies!
                  </p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817169/crbaucom-images/crestedbutte.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817009/videos/CrestedButte-House.appleuniversal.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Crested Butte 2013</h3>
                  <p className="excerpt">Good times with good freinds!</p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817169/crbaucom-images/DaMowgliBird.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817017/videos/DaMowgliBird.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Mowgli Cat</h3>
                  <p className="excerpt">this cat love da bird!</p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817168/crbaucom-images/cbair.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817022/videos/BreckDocumentaryTrailer.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">
                    Breckenridge Documentary Trailer. Part 1.
                  </h3>
                  <p className="excerpt">
                    Lambrusco & Co. take on the slopes at Breck.
                  </p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817168/crbaucom-images/breckmtnview.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817032/videos/BreckenridgeTrailer2.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">
                    Breckenridge Documentary Trailer. Part 2.
                  </h3>
                  <p className="excerpt">
                    Lambrusco & Co. are back with more Breckenridge action.
                  </p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817178/crbaucom-images/snowkid.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817037/videos/BreckLarryDrama.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Snow Kid. Instant Classic.</h3>
                  <p className="excerpt">
                    Legend Larry Lambrusco conquers the world.
                  </p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817178/crbaucom-images/redlight.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817050/videos/istheredlightON.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Is the red light ON?</h3>
                  <p className="excerpt">It's blinking!</p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817178/crbaucom-images/KillingtonBikePark.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817063/videos/KillingtonBikePark.appleuniversal.mp4"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Killington Bike Park</h3>
                  <p className="excerpt">Send it!</p>
                </div>
              </article>
            </section>
            <section className="col-md-6">
              <article className="Card small">
                <Player
                  playsInline
                  poster="https://res.cloudinary.com/crbaucom/image/upload/v1543817169/crbaucom-images/driverock.jpg"
                  src="https://res.cloudinary.com/crbaucom/video/upload/v1543817099/videos/rockwalldrive.mov"
                >
                  <BigPlayButton position="center" />
                  <ControlBar autoHide={false}>
                    <PlaybackRateMenuButton
                      rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
                      order={7.1}
                    />
                  </ControlBar>
                </Player>
                <div className="content">
                  <h3 className="Title">Drive to Rockwall.</h3>
                  <p className="excerpt">
                    Nothing special here except the Dale Jr. Jr. music!
                  </p>
                </div>
              </article>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}
