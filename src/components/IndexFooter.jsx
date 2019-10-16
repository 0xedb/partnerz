import React from 'react';
import mousekeyboard from '../static/images/keyboardandmouse.svg';

function IndexFooter() {
  return (
    <footer className="page_footer">
      <div className="foot_bottom">
        <small className="copyright">&copy; 2019 Partnerz FP Limited</small>
        <small className="dev_info">
          Made with a &nbsp;
          <img
            className="mousekeyboard"
            src={mousekeyboard}
            alt="mouse and keyboard"
          />&nbsp;
          by
          <a href="https://github.com/theBashShell" target="_blank">
            &nbsp; theBashShell
          </a>
        </small>
      </div>
    </footer>
  );
}

export default IndexFooter;
