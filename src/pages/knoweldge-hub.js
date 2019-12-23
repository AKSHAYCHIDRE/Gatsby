import React from 'react'
import Layout from '../components/layout'
import hero1 from '../styles/images/hero1.png';
import aboutLoan from '../styles/images/about-loan.jpg';
import guidelines1 from '../styles/images/guidelines1.jpg';
import { Link } from '@reach/router';
import Footer from '../components/footer';
import { graphql } from 'gatsby';
class KnoweldgeHub extends React.Component {
  render(){
    const postData = this.props.data.allPrismicKnowledgeHubPost.edges;
    const data = this.props.data.prismicKnoweldeHubMain.data;
    console.log('data',data);
    
    console.log('data from knowledge hub page', postData);
    return(
      <Layout>
        <section className="knowledge-hub-section container container-sm-fluid bg-color">
          <div className="padding-block-60">
            <h2 className="page-heading">{data.title.text}</h2> 
          </div>
          <div className="row mr-0">
            <div className="col-12">
              <div className=" m-0" dangerouslySetInnerHTML={{__html: data.description.html}}/>
            </div>
          </div>
        </section>
        <section className="knowledge-hub mt-0 mt-md-5">
          {
          console.log('item.length-1', postData[postData.length - 1]),
          //  postData[postData.length - 1],
          <div className=" buyer-tips-banner">
            <div className="container container-sm-fluid">
              <div className="heading">
                <h3 className="text-center text-uppercase section-title">{postData[postData.length - 1].node.data.title.text}</h3>
              </div>
              <div className="position-relative buyer-tips-banner-img">
                <div className="buyer-tips-image">
                  <img  class="lazyload" src={postData[postData.length - 1].node.data.banner.url } alt="" width="100%"/>
                </div>
                <div className="buyer-tips-box position-absolute  d-flex justify-content-between flex-column">
                  <h3 className=" text-uppercase m-0 section-title">{postData[postData.length - 1].node.data.title.text}</h3>
                  <p className="mb-0 text-white">Learn all about tax planning and documentation by reading all the FAQs and more…</p>
                    <div className="know-more">
                      <a href="#">
                        <span className="mr-3">Read More</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          }


          <div className="buyer-tips-info">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-loan card-primary mt-100">
                    <div className="heading">
                      <h3 className=" text-uppercase mb-2 mb-sm-3 section-title ">About Loan</h3>
                    </div>
                    <div className="row mt-25">
                      <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                        <div className="card-primary-img">
                          <img src={aboutLoan} alt="" width="100%"/>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6  col-6 pl-0 pl-md-3 pl-lg-0 ">
                        <div className=" p-sm-4 d-flex justify-content-between flex-column bg-light-gray">
                          <p>Praesent gravida augue eu metus interdum, ac elementum metus blandit.</p>
                          <div className="know-more">
                            <a href="#">
                              <span className="mr-3">Know More</span>
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0 pl-md-3 pr-md-3 ">
                  <div className="guidelines-nris mt-100">
                    <div className="heading">
                      <h3 className=" text-uppercase mb-3 section-title">Guidelines for NRIs</h3> 
                    </div>
                    <div className="guidelines-nris-wrapper position-relative mt-25">
                      <div className=" guidelines-nris-img">  
                        <img src={guidelines1} alt="" width="100%"/>
                      </div> 
                      <div className="guidelines-nris-info position-absolute">
                        <p className="mb-0 mb-sm-2 text-white">Guidelines For NRIs</p>
                        <div className="know-more">
                          <Link to='/nri'>
                            <span className="mr-sm-5 mr-3">Know More</span>
                            <i className="fas fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="maha-rera card-primary mt-70">
                  <div className="heading ">
                    <h3 className=" text-uppercase mb-3 section-title">Maha Rera</h3>
                  </div>
                  <div className="row mt-25">
                    <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                      <div className="card-primary-img">
                        <img src={aboutLoan} alt="" width="100%"/>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-6 pl-0 pl-md-3 pl-lg-0">
                      <div className=" p-sm-4 d-flex justify-content-between flex-column bg-light-gray">
                        <p>Praesent gravida augue eu metus interdum, ac elementum metus blandit.</p>
                        <div className="know-more">
                          <a href="#">
                            <span className="mr-3">Know More</span>
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-md-6 ">
                  <div className="important-notices card-primary mt-70">
                    <div className="heading">
                      <h3 className=" text-uppercase mb-3 section-title">Important Notices</h3>
                    </div>
                    <div className="row mt-25">
                      <div className="col-md-12 col-lg-6 col-6 pr-0 pr-md-3 pr-lg-0">
                        <div className="card-primary-img">
                          <img src={aboutLoan} alt="" width="100%"/>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6 col-6 pl-0 pl-md-3 pl-lg-0">
                        <div className=" p-sm-4 d-flex justify-content-between flex-column bg-light-gray">
                          <h3 className="inner-section-title">Important Notices</h3>
                          <p>Praesent gravida augue eu metus interdum, ac elementum metus blandit.</p>
                          <div className="know-more">
                            <a href="#">
                            <span className="mr-3">Know More</span>
                            <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
}
export default KnoweldgeHub;

export const knowledgePage = graphql`{
  allPrismicKnowledgeHubPost{
	edges{
    node{
      data{
        title {
          text
        }
        banner{
          url
        }
        description{
          html
        }
        heading{
          text
        }
      }
    }
  }  
}

prismicKnoweldeHubMain{
  data{
    title{
       text
    }
    description{
      html
    }
  }
}
}`