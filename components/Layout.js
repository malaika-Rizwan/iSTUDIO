import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/project", label: "Projects" },
];

const pageLinks = [
  { href: "/feature", label: "Features" },
  { href: "/team", label: "Our Team" },
  { href: "/testimonial", label: "Testimonials" },
  { href: "/404", label: "404 Page" },
];

function navClass(pathname, href, base) {
  return pathname === href ? `${base} active` : base;
}

export default function Layout({ children }) {
  const { pathname } = useRouter();

  useEffect(() => {
    const sources = [
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
      "/lib/wow/wow.min.js",
      "/lib/easing/easing.min.js",
      "/lib/waypoints/waypoints.min.js",
      "/lib/owlcarousel/owl.carousel.min.js",
      "/js/main.js",
    ];
    let cancelled = false;

    function load(src) {
      const existing = document.querySelector(`script[data-template="${src}"]`);
      if (existing) return Promise.resolve();
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.dataset.template = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(src));
        document.body.appendChild(script);
      });
    }

    (async () => {
      for (const src of sources) {
        if (cancelled) return;
        await load(src);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Head>
        <title>iSTUDIO - Made by Malaika Rizwan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
            <a href="/" className="navbar-brand">
              <h1>iSTUDIO</h1>
            </a>
            <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                {mainLinks.map((link) => (
                  <a key={link.href} href={link.href} className={navClass(pathname, link.href, "nav-item nav-link")}>
                    {link.label}
                  </a>
                ))}
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu bg-light mt-2">
                    {pageLinks.map((link) => (
                      <a key={link.href} href={link.href} className={navClass(pathname, link.href, "dropdown-item")}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="/contact" className={navClass(pathname, "/contact", "nav-item nav-link")}>Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {children}

      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="/" className="d-inline-block mb-3">
                <h1 className="text-white">iSTUDIO</h1>
              </a>
              <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor</p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p><i className="fa fa-phone-alt me-3"></i><a className="text-white-50" href="tel:+923348351721">+92********</a></p>
              <p><i className="fa fa-envelope me-3"></i><a className="text-white-50" href="mailto:malaikarizwan121@gmail.com">malaikarizwan121@gmail.com</a></p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-primary btn-square border-2 me-2" href="/contact"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-primary btn-square border-2 me-2" href="/contact"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-primary btn-square border-2 me-2" href="/contact"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-primary btn-square border-2 me-2" href="/contact"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-outline-primary btn-square border-2 me-2" href="/contact"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href="/about">About Us</a>
              <a className="btn btn-link" href="/contact">Contact Us</a>
              <a className="btn btn-link" href="/about">Privacy Policy</a>
              <a className="btn btn-link" href="/about">Terms & Condition</a>
              <a className="btn btn-link" href="/team">Career</a>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <a className="btn btn-link" href="/service">Interior Design</a>
              <a className="btn btn-link" href="/project">Project Planning</a>
              <a className="btn btn-link" href="/service">Renovation</a>
              <a className="btn btn-link" href="/service">Implement</a>
              <a className="btn btn-link" href="/service">Landscape Design</a>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="https://portfoilio-jet.vercel.app" target="_blank" rel="noopener noreferrer">Malaika Rizwan</a>, All Right Reserved.
                {" "}Designed By <a className="border-bottom" href="https://portfoilio-jet.vercel.app" target="_blank" rel="noopener noreferrer">Malaika Rizwan</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/contact">Cookies</a>
                  <a href="/contact">Help</a>
                  <a href="/contact">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  );
}
