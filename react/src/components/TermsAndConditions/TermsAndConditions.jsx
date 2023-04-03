import React, { useState, useRef } from 'react';
import './TermsAndConditions.css';

function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState(false);
  const bgRef = useRef(null);
  const termsBoxRef = useRef(null);
  const termsRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleButtonClick = () => {
    setIsChecked(false);
    bgRef.current.classList.remove('hidden');
    termsBoxRef.current.classList.add('zoom-in');
    termsRef.current.scrollTo(0, 0);
  }

  const handleBackgroundClick = (event) => {
    if (event.target.className === 'transparency-bg') {
      bgRef.current.classList.add('hidden');
      termsBoxRef.current.classList.remove('zoom-in');
    }
  }

  const handleCheckboxContainerClick = () => {
    const termsBox = termsRef.current;
    const isAtTheEnd = termsBox.scrollTop + termsBox.offsetHeight >= termsBox.scrollHeight;

    if (isAtTheEnd) {
      setIsChecked(!isChecked);
    }
  }

  const handleTermsScroll = () => {
    const termsBox = termsRef.current;
    const isAtTheEnd = termsBox.scrollTop + termsBox.offsetHeight >= termsBox.scrollHeight;

    const checkboxContainer = checkboxRef.current;
    checkboxContainer.style.cursor = isAtTheEnd ? 'default' : 'not-allowed';
  }

  return (
    <>
      <button onClick={handleButtonClick}>Abrir termos e condições</button>
      <div className="transparency-bg hidden" onClick={handleBackgroundClick} ref={bgRef}>
        <div className="terms-box" ref={termsBoxRef}>
          <p className="terms-title">Termos e condições</p>
          <div className="terms" onScroll={handleTermsScroll} ref={termsRef}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="checkbox-container" onClick={handleCheckboxContainerClick} ref={checkboxRef}>
            <div className='label'>
              <input type="checkbox" checked={isChecked} readOnly/>
              Li e aceito os termos e condições
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TermsAndConditions;