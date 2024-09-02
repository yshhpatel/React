import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg h-100">
              <div className="container-fluid">
                <img src="https://preview.colorlib.com/theme/gardening/assets/img/logo/logo.png" alt=""/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a id="s" className="nav-link active fs-6" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a id="s1" className="nav-link fs-6" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a id="s1" className="nav-link fs-6" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a id="s1" className="nav-link fs-6" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a id="s1" className="nav-link fs-6" href="#">Project</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a id="s1" className="nav-link dropdown-toggle fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <button id="s2" className="btn btn-outline-success" type="submit">Get Free Quote</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img id="q1" src="https://preview.colorlib.com/theme/gardening/assets/img/hero/h1_hero1.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="qq1 display-4">We Provide best gardening services</h5>
                    <p className="qq2 fs-5">Trust the Ground Guys Professionals To take care of your Commercial or Residential Ground.</p>
                    <button id="ss1" className="btn btn-outline-success" type="submit">View our Services</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img id="q1" src="https://cdn.pixabay.com/photo/2013/08/28/00/54/field-176602_1280.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="qq1 display-4">We Provide best gardening services</h5>
                    <p className="qq2 fs-5">Trust the Ground Guys Professionals To take care of your Commercial or Residential Ground.</p>
                    <button id="ss1" className="btn btn-outline-success" type="submit">View our Services</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img id="q1" src="https://cdn.pixabay.com/photo/2021/05/27/20/53/field-6289253_1280.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="qq1 display-4">We Provide best gardening services</h5>
                    <p className="qq2 fs-5">Trust the Ground Guys Professionals To take care of your Commercial or Residential Ground.</p>
                    <button id="ss1" className="btn btn-outline-success" type="submit">View our Services</button>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
