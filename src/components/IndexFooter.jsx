import React from 'react';
import mousekeyboard from '../static/images/keyboardandmouse.svg';

function IndexFooter() {
  return (
    <footer className="page_footer">
      <small className="copyright">&copy; 2019 Partnerz FP Limited</small>
      <small className="dev_info">
        Made with a <img className="mousekeyboard" src={mousekeyboard} alt="mouse and keyboard" /> by
        <a href="https://github.com/theBashShell" target="_blank">
          {' '}
          theBashShell
        </a>
      </small>
    </footer>
  );
}

export default IndexFooter;
