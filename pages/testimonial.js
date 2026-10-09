import Layout from "../components/Layout";

export default function TestimonialPage() {
  return (
    <Layout>
{/* Hero Start */}
    <div className="container-fluid pb-5 bg-primary hero-header">
        <div className="container py-5">
            <div className="row g-3 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-1 mb-0 animated slideInLeft">Testimonial</h1>
                </div>
                <div className="col-lg-6 animated slideInRight">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                            <li className="breadcrumb-item"><a className="text-primary" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-primary" href="/testimonial">Pages</a></li>
                            <li className="breadcrumb-item text-secondary active" aria-current="page">Testimonials</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}


    {/* Testimonial Start */}
    <div className="container-xxl py-5">
        <div className="container py-5">
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
