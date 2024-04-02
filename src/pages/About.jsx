import groupSquare from './../images/group_square.jpg'
import groupGate from './../images/group_gate.jpg'
import './../App.css'
import NavBar from './../components/NavBar.jsx'
import Logo from './../components/Logo.jsx'
import background from './../images/noteworthy_group.jpg'

function About() {
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
            <h1>Who is Noteworthy?</h1>
          </div>
        </div>

        <div className="about1">
            <div className="row">
              <img src={groupSquare}  height="400" width="400"/>
              <p>
                  We're a lower-voices a cappella group known for our fun performances and fresh
                  takes on popular songs! It always feels sunny when we perform, and not just
                  because of our golden vests!
              </p>
            </div>
            <div className="row">
              <p>
                  Since our founding in 2000, we've gone million-view-viral on YouTube multiple
                  times, released an album entirely composed of original songs, and performed at
                  the 2022 UC Berkeley commencement.
              </p>
              <img src={groupGate} height="300" width="500"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default About