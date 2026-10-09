import Layout from "../components/Layout";

export default function FeaturePage() {
  return (
    <Layout>
{/* Hero Start */}
    <div className="container-fluid pb-5 bg-primary hero-header">
        <div className="container py-5">
            <div className="row g-3 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-1 mb-0 animated slideInLeft">Features</h1>
                </div>
                <div className="col-lg-6 animated slideInRight">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                            <li className="breadcrumb-item"><a className="text-primary" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-primary" href="/feature">Pages</a></li>
                            <li className="breadcrumb-item text-secondary active" aria-current="page">Features</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}


    {/* Feature Start */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center wow fadeIn" data-wow-delay="0.1s">
                <h1 className="mb-5">Why People <span className="text-uppercase text-primary bg-light px-2">Choose Us</span></h1>
            </div>
            <div className="row g-5 align-items-center text-center">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-calendar-alt fa-5x text-primary mb-4"></i>
                    <h4>25+ Years Experience</h4>
                    <p className="mb-0">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-tasks fa-5x text-primary mb-4"></i>
                    <h4>Best Interior Design</h4>
                    <p className="mb-0">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-pencil-ruler fa-5x text-primary mb-4"></i>
                    <h4>Innovative Architects</h4>
                    <p className="mb-0">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-user fa-5x text-primary mb-4"></i>
                    <h4>Customer Satisfaction</h4>
                    <p className="mb-0">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-hand-holding-usd fa-5x text-primary mb-4"></i>
                    <h4>Budget Friendly</h4>
                    <p className="mb-0">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-check fa-5x text-primary mb-4"></i>
                    <h4>Sustainable Material</h4>
                    <p className="mb-0">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
            </div>
        </div>
    </div>
    {/* Feature End */}


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
