import Header from "../temps/Header";
import Footer from "../temps/Footer";
import Banner from "../temps/Banner";

function About(){
  return(

    <div>
      <Header />
      <Banner img="images/pic.jpg" />
        <div className="row w3-margin w3-center w3-white">
          <div className="col-md-12 col-sm-12 w3-padding  w3-margin-top">
            <div className="blog-img">
           
            </div>
            <h4>MY PICTURE</h4>
            <p className="w3-padding"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil at velit consequatur 
                dolores exercitationem iusto, 
                soluta quos delectus itaque unde voluptate, ab esse necessitatibus. Sint qui tenetur quibusdam hic. 
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4">

          </div>
          <div className="col-md-4 col-sm-4">

          </div>
          <div className="col-md-4 col-sm-4">

          </div>
        </div>




      <Footer />

    </div>
  )

}

export default About;