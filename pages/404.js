import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
{/* Hero Start */}
    <div className="container-fluid pb-5 bg-primary hero-header">
        <div className="container py-5">
            <div className="row g-3 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-1 mb-0 animated slideInLeft">404 Error</h1>
                </div>
                <div className="col-lg-6 animated slideInRight">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                            <li className="breadcrumb-item"><a className="text-primary" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-primary" href="/404">Pages</a></li>
                            <li className="breadcrumb-item text-secondary active" aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}


    {/* 404 Start */}
    <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <a className="btn btn-primary py-3 px-4" href="/">Home</a>
                </div>
            </div>
        </div>
    </div>
    {/* 404 End */}
        

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
