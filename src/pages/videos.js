import React, { Component } from 'react'
import { Player, BigPlayButton, ControlBar, PlaybackRateMenuButton } from 'video-react'
import '../assets/css/video-react.css'
import '../assets/css/bootstrap-grid.css'

export default class Frontpage extends Component {
  render() {
    return (
      <div className="container Videos">
        <h1 className="pt2">My Videos</h1>
        <hr />
        <div className="container row">
          <section className="col-md-6">
            <article className="Card small">
              <Player
                playsInline
                poster="https://resume.crbaucom.com/files/sprayAnna.jpg"
                src="https://resume.crbaucom.com/files/sprayAnnaKillington.mp4"
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
                  Killington Facial.{' '}
                  <span className="muted">Personal Favorite.</span>
                </h3>
                <p className="excerpt">
                  Anna gets a face full of snow while Jerry, in the background,
                  does cart-wheels down the mountain. The best!
                </p>
              </div>
            </article>
          </section>
          <section className="col-md-6">
            <article className="Card small">
              <Player
                playsInline
                poster="https://resume.crbaucom.com/files/timelapsecover.jpg"
                src="https://resume.crbaucom.com/files/TimeLapse.mov"
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
                poster="https://resume.crbaucom.com/files/crestedbutte.jpg"
                src="https://resume.crbaucom.com/files/CrestedButte-House.appleuniversal.mp4"
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
                poster="https://resume.crbaucom.com/files/DaMowgliBird.jpg"
                src="https://resume.crbaucom.com/files/DaMowgliBird.mp4"
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
                poster="https://resume.crbaucom.com/files/cbair.jpg"
                src="https://resume.crbaucom.com/files/BreckDocumentaryTrailer.m4v"
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
                poster="https://resume.crbaucom.com/files/breckmtnview.jpg"
                src="https://resume.crbaucom.com/files/BreckenridgeTrailer2.m4v"
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
                poster="https://resume.crbaucom.com/files/snowkid.jpg"
                src="https://resume.crbaucom.com/files/BreckLarryDrama.m4v"
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
                poster="https://resume.crbaucom.com/files/redlight.jpg"
                src="https://resume.crbaucom.com/files/istheredlightON.m4v"
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
                poster="https://resume.crbaucom.com/files/KillingtonBikePark.jpg"
                src="https://resume.crbaucom.com/files/KillingtonBikePark.appleuniversal.mp4"
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
                poster="https://resume.crbaucom.com/files/drivetowork.jpg"
                src="https://resume.crbaucom.com/files/drivetowork.mov"
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
                <h3 className="Title">Drive to work.</h3>
                <p className="excerpt">Boring!</p>
              </div>
            </article>
          </section>
          <section className="col-md-6">
            <article className="Card small">
              <Player
                playsInline
                poster="https://resume.crbaucom.com/files/driverock.jpg"
                src="https://resume.crbaucom.com/files/rockwalldrive.mov"
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
    )
  }
}
