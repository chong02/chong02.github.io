import './../App.css'
import NavBar from './../components/NavBar.jsx'
import Logo from './../components/Logo.jsx'
import background from './../images/noteworthy_group.jpg'

function Hire() {
  return (
    <>
      <div className="page">
        <div className="navbar">
          <NavBar/>
        </div>
        <div className="logo">
          <Logo/>
        </div>

        <img className="background" src={background} height="900" width="1200"/>

        <div className="pageTitle">
          <div className="content">
            <h1>Hire Us!</h1>
          </div>
        </div>

        <div className="hire1">
          <div className="tileContent">
            <h3> How to hire us </h3>
            <p>
              Please e-mail out business manager at noteworthy@ucchoral.berkeley.edu and fill
              out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform">
              form</a>. Then we'll respond to you with a quote as soon as possible. In your email, let us know:
              <ul>
                <li>Who you are</li>
                <li>The details fo the event (where and when it'll be)</li>
                <li>What kind of songs you'd like us to perform and how long the performance should be</li>
              </ul>
            </p>

            <h3>We take song requests</h3>
            <p>
              Check out our <a href="https://noteworthy.studentorg.berkeley.edu/current-repertoire/">current
              repertoire</a> for a sample of the songs we perform. If the song you want isn't listed there,
              ask us about it -- we might have it arranged already. With enough advance notice, we can
              perform anything from our archive, which is large and always growing.
            </p>

            <h3>Times and locations</h3>
            <p>
              We're available to perform throughout the academic year and can travel anywhere in the Bay Area.
              Traveling beyond the Bay Area may require extra planning and travel costs.
            </p>

            <h3>UC Berkeley charity events</h3>
            <p>
              If you are a subsidiary of UC Berkeley and you're organizing a charity event on campus, we are
              happy to give you a reduced rate.
            </p>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Hire