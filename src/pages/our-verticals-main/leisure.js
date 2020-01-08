import React from 'react'
// import Slider from "react-slick";
import Img from 'gatsby-image';

class Leisure extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="home-slider">
        {
        this.props.gallery &&
          <section className="banner-section">
            <Img fluid={this.props.gallery.data.banner.localFile.childImageSharp.fluid} alt="banner here" className="banner-img" style={{width:'100%'}}/>
          </section>  
        }
      </div>
    )
  }
}
export default Leisure;
