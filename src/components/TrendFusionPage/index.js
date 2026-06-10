import TrendFusionForm from "../TrendFusionForm";

import "./index.css";

const TrendFusionPage = () => {
  return (
    <div className="trend-fusion-page">

      <header className="tfi-header">

        <img
          src="https://res.cloudinary.com/doyaebals/image/upload/v1781068596/580ddb0da673ab775cb18ca2855fc2593de8a161_fdmtsw.png"
          alt="logo"
          className="tfi-logo"
        />

        <h1>
          TREND FUSION INDIA
        </h1>

        <img
          src="YOUR_PROFILE_ICON_URL"
          alt="profile"
          className="profile-icon"
        />

      </header>

      <div className="header-line" />

      <section className="main-content">

        {/* LEFT */}

        <div className="left-panel">

          <h2>
            The Future of
            <br />
            Fashion.
          </h2>

          <p>
            At Trend Fusion India, we believe every child
            possesses a unique spark. Our runway is not
            just about clothes; it's a platform for
            confidence, discipline, and the beginning
            of a professional journey in the high-fashion
            world.
          </p>

          <div className="location-row">

            <div>
              <span>LOCATION</span>
              <h4>HYDERABAD</h4>
            </div>

            <div>
              <span>SEASON</span>
              <h4>2026</h4>
            </div>

          </div>

          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1781068607/cffbc9da5be6757665053c25e0288e9424549ec5_kuuajo.png"
            alt="kids"
            className="kids-model-image"
          />

        </div>

        {/* RIGHT */}

        <div className="right-panel">

          <span className="casting-call">
            MODEL CASTING CALL
          </span>

          <h3 className="portfolio-heading">
            Registration Portfolio
          </h3>

          <TrendFusionForm />

        </div>

      </section>

      <footer className="footer-section">

        <img
          src="https://res.cloudinary.com/doyaebals/image/upload/v1781068596/580ddb0da673ab775cb18ca2855fc2593de8a161_fdmtsw.png"
          alt="footer"
          className="footer-logo"
        />

        <div>
          <p>+91 9247579767</p>
          <p>+91 9247531301</p>
        </div>

        <p>
          www.trendfusionindia.com
        </p>

        <p>
          cmo@trendfusionindia.com
        </p>

      </footer>

    </div>
  );
};

export default TrendFusionPage;