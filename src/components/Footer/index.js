import React from "react";

import "./style.css";

function Index(props) {
  return (
    <footer className="col-12 footer">
      <div className="justify-content-center">
        <div className="col-12 text-light">
          <ul className="list-inline d-flex footer-list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://s.id/geschool"
                className="footer-link bold"
              >
                Road Map to Geschool
              </a>
            </li>
          </ul>
          <ul className="list-inline d-flex footer-list link-list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.jogjakota.go.id/pages/dinas-daerah"
                className="footer-link"
              >
                Dinas Kota Yogyakarta
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://diy.kemenag.go.id/"
                className="footer-link"
              >
                Kemenag DIY
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dikpora.jogjaprov.go.id/web/"
                className="footer-link"
              >
                Dikpora Kota Yogyakarta
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 copyright mt-2">&copy; {props.copyright}</div>
      </div>
    </footer>
  );
}

export default Index;
