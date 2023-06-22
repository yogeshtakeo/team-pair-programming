import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a
                  href="https://www.takeo.ai/"
                  className="nav-link px-2 text-secondary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.takeo.ai/about-us"
                  className="nav-link px-2 text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.takeo.ai/application-process"
                  className="nav-link px-2 text-white"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="https://www.takeo.ai/application-process"
                  className="nav-link px-2 text-white"
                >
                  Student Life
                </a>
              </li>
              <li>
                <a
                  href="https://www.takeo.ai/application-process"
                  className="nav-link px-2 text-white"
                >
                  Contact
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOnFD3vVUI-p_GW2G5PRs7u46hAfhFlk-OlOFmg=s1360-w1360-h1020"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNVcprJhBar2wTf9LOFJX_rsZ_jJTuVeDvtmQNP=s1360-w1360-h1020"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipM1bk1q03JP-3sClg-BuzBYjpoTELTwB-su8Sw8=s1360-w1360-h1020"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMqzV5ywVa0AcBzQZDTGLi3zJnio_an5_ziG0el=s1360-w1360-h1020"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <footer className="py-3 my-4 mt-0 bg-secondary text-white">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Alumni
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Tution
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Check More
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 Namkhang& Sandesh</p>
      </footer>
    </>
  );
}

export default App;

{
  /* <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">
          Hello, world! This is a toast message.
          <div className="mt-2 pt-2 border-top">
            <button type="button" className="btn btn-primary btn-sm">
              Take action
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-dismiss="toast"
            >
              Close
            </button>
          </div>
        </div>
      </div> */
}

{
  /* <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer> */
}
