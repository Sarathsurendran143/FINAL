import React from 'react';

const Footer = () => {
  return (
    <section>
      {/* Footer */}
      <footer className="text-center text-white" style={{ backgroundColor: '#90c5f7' }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: CTA */}
          <section>
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>
          {/* Section: CTA */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(17, 17, 17, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </section>
  );
};

export default Footer;
