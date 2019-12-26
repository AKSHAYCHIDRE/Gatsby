import React from 'react'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import { graphql } from 'gatsby';

class Hospitality extends React.Component {
  render(){
    const hospitalityData = this.props.data.allPrismicHospitality.edges;
    const data = hospitalityData[0].node.data;
    return(
      <Layout>
        <section className=" page-heading-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{data.title.text}</h2> 
          </div>
          <div className="row  mr-0">
            <div className="col-12">
              <div className="main-paragraph"> 
                <p >
                    {data.description.text}
                </p>
              </div>  
            </div>
          </div>
          </section>
          <section className="hospitality-projects">
            <div className="residences">
              <div className="container">
                <div className="row">
                  {console.log('data',data)}
                  {
                    data.hospitality_links.map((item,value)=>{
                      return(
                        <div className="col-md-4 p-0 pl-sm-3 pr-sm-3" key={value}>
                          {item.vertical_links.document.map((datas, value)=>{
                            return(
                              console.log('datas', datas),
                                <div className="residences-card position-relative" key={value}>
                                  <div className="residences-img ">
                                    <img src={datas.data.banner[0].image.url} alt="" width="100%"/>
                                  </div>
                                  <div className="rectangle position-absolute d-flex flex-column justify-content-around">
                                    <div className="rectangle-title">
                                      <h4 className="text-uppercase m-0 inner-section-title">{datas.data.title.text}</h4>
                                    </div>
                                    <div className="apartment-size d-flex justify-content-between align-items-center">
                                      <span className="text-uppercase">{datas.data.flat_bhk.text}</span>
                                      <a href="#">
                                        <i className="fas fa-arrow-right"></i>
                                      </a>
                                    </div>
                                    <div className="project-location">
                                      <i className="fas fa-map-marker-alt"></i>
                                      {console.log('datas.data.flat_address.text', datas.data.flat_address.text)}
                                      <span>{datas.data.flat_address.text}</span>
                                    </div>
                                  </div>
                                </div>
                              )
                          })}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </Layout>
    )
  }
}

export default Hospitality;

export const hospitalityPage = graphql`{
  allPrismicHospitality{
    edges{
      node{
        uid
        data{
          title{
            text
          }
          description{
            text
          }
          hospitality_links{
            vertical_links{
              document{
                data{
                  title{
                    text
                  }
                  banner{
                    image{
                      url
                    }
                  }
                  flat_bhk{
                    text
                  }
                  flat_address{
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`