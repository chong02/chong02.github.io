import background from './../images/noteworthy_group.jpg'
import ellington from './../images/ellington.jpg'
import bhaskar from './../images/bhaskar.jpg'
import maya from './../images/maya.jpg'
import './../App.css'
import NavBar from './../components/NavBar.jsx'
import Logo from './../components/Logo.jsx'
import PhotoCard from './../components/PhotoCard.jsx'

function People() {
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

        <div className="people1">
            <PhotoCard photoUrl={ellington} name="Ellington"/>
            <PhotoCard photoUrl={bhaskar} name="Bhaskar"/>
            <PhotoCard photoUrl={maya} name="Maya"/>
        </div>
      </div>
    </>
  )
}

export default People