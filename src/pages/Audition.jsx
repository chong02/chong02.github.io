import './../App.css'
import NavBar from './../components/NavBar.jsx'
import Logo from './../components/Logo.jsx'
import background from './../images/noteworthy_group.jpg'

function Audition() {
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
            <h1>Interested in Auditioning?</h1>
          </div>
        </div>

        <div className="audition1">
          <div className="tileContent">
            <p>
              Our next round of auditions will take place in fall 2024. We are looking for
              voices (alto, tenors, baritones, and basses) as well as vocul percussionists.
              All genders are welcome.
              <br/> <br/>
              Don't be reluctant if you haven't had a lot of experience with singing. We haven
              seen many of our members grow greatly as singers during their time in the group.
              <br/> <br/>
              Please <strong>email us</strong> at noteworthy@ucchoral.berkeley.edu
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Audition