import Layout from "../components/Layout";

export default function TeamPage() {
  return (
    <Layout>
{/* Hero Start */}
    <div className="container-fluid pb-5 bg-primary hero-header">
        <div className="container py-5">
            <div className="row g-3 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-1 mb-0 animated slideInLeft">Our Team</h1>
                </div>
                <div className="col-lg-6 animated slideInRight">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                            <li className="breadcrumb-item"><a className="text-primary" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-primary" href="/team">Pages</a></li>
                            <li className="breadcrumb-item text-secondary active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}


    {/* Team Start */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <h1 className="mb-5">Our Professional <span className="text-uppercase text-primary bg-light px-2">Designers</span>
            </h1>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="team-item position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/img/team-1.jpg" alt="" />
                        <div className="team-overlay">
                            <small className="mb-2">Architect</small>
                            <h4 className="lh-base text-light">Boris Johnson</h4>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="team-item position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/img/team-2.jpg" alt="" />
                        <div className="team-overlay">
                            <small className="mb-2">Architect</small>
                            <h4 className="lh-base text-light">Donald Pakura</h4>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="team-item position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/img/team-3.jpg" alt="" />
                        <div className="team-overlay">
                            <small className="mb-2">Architect</small>
                            <h4 className="lh-base text-light">Bradley Gordon</h4>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="team-item position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/img/team-4.jpg" alt="" />
                        <div className="team-overlay">
                            <small className="mb-2">Architect</small>
                            <h4 className="lh-base text-light">Alexander Bell</h4>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="btn btn-outline-primary btn-sm-square border-2 me-2" href="/team">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Team End */}


    {/* Newsletter Start */}
    <div className="container-fluid bg-primary newsletter p-0">
        <div className="container p-0">
            <div className="row g-0 align-items-center">
                <div className="col-md-5 ps-lg-0 text-start wow fadeIn" data-wow-delay="0.2s">
                    <img className="img-fluid w-100" src="/img/newsletter.jpg" alt="" />
                </div>
                <div className="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-5">
                        <h1 className="mb-5">Subscribe the <span className="text-uppercase text-primary bg-white px-2">Newsletter</span></h1>
                        <div className="position-relative w-100 mb-2">
                            <input className="form-control border-0 w-100 ps-4 pe-5" type="text"
                                placeholder="Enter Your Email" style={{ height: '60px' }} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2"><i
                                    className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                        <p className="mb-0">Diam sed sed dolor stet amet eirmod</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Newsletter End */}
    </Layout>
  );
}
