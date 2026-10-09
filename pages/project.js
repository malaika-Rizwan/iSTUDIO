import Layout from "../components/Layout";

export default function ProjectPage() {
  return (
    <Layout>
{/* Hero Start */}
    <div className="container-fluid pb-5 bg-primary hero-header">
        <div className="container py-5">
            <div className="row g-3 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-1 mb-0 animated slideInLeft">Projects</h1>
                </div>
                <div className="col-lg-6 animated slideInRight">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                            <li className="breadcrumb-item"><a className="text-primary" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-primary" href="/project">Pages</a></li>
                            <li className="breadcrumb-item text-secondary active" aria-current="page">Projects</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}


    {/* Project Start */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row g-0">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                        <h1 className="text-white mb-5">Our Latest <span
                                className="text-uppercase text-primary bg-light px-2">Projects</span></h1>
                        <h4 className="text-white mb-0"><span className="display-1">6</span> of our latest projects</h4>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.2s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/project-1.jpg" alt="" />
                                <a className="project-overlay text-decoration-none" href="/project">
                                    <h4 className="text-white">Kitchen</h4>
                                    <small className="text-white">72 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/project-2.jpg" alt="" />
                                <a className="project-overlay text-decoration-none" href="/project">
                                    <h4 className="text-white">Bathroom</h4>
                                    <small className="text-white">67 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.4s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/project-3.jpg" alt="" />
                                <a className="project-overlay text-decoration-none" href="/project">
                                    <h4 className="text-white">Bedroom</h4>
                                    <small className="text-white">53 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/project-4.jpg" alt="" />
                                <a className="project-overlay text-decoration-none" href="/project">
                                    <h4 className="text-white">Living Room</h4>
                                    <small className="text-white">33 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/project-5.jpg" alt="" />
                                <a className="project-overlay text-decoration-none" href="/project">
                                    <h4 className="text-white">Furniture</h4>
                                    <small className="text-white">87 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="/img/project-6.jpg" alt="" />
                                <a className="project-overlay text-decoration-none" href="/project">
                                    <h4 className="text-white">Rennovation</h4>
                                    <small className="text-white">69 Projects</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Project End */}


    {/* Testimonial Start */}
    <div className="container-xxl pb-5">
        <div className="container pb-5">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-9">
                    <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.2s">
                        <div className="testimonial-item">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <div className="testimonial-img">
                                        <img className="img-fluid" src="/img/testimonial-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="testimonial-text pb-5 pb-md-0">
                                        <h3>Sustainable Material</h3>
                                        <p>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed
                                            stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                                            dolore erat
                                            amet</p>
                                        <h5 className="mb-0">Boris Johnson</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <div className="testimonial-img">
                                        <img className="img-fluid" src="/img/testimonial-2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="testimonial-text pb-5 pb-md-0">
                                        <h3>Customer Satisfaction</h3>
                                        <p>Clita erat ipsum et lorem et sit, sed
                                            stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                                            dolore erat
                                            amet</p>
                                        <h5 className="mb-0">Alexander Bell</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <div className="testimonial-img">
                                        <img className="img-fluid" src="/img/testimonial-3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="testimonial-text pb-5 pb-md-0">
                                        <h3>Budget Friendly</h3>
                                        <p>Diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed
                                            stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                                            dolore erat
                                            amet</p>
                                        <h5 className="mb-0">Bradley Gordon</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Testimonial End */}


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
