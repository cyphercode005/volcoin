import React, { useEffect, useState } from 'react';
// import './styles.css'; // Import your CSS file for styling

const Animate = () => {

    // const App = () => {
        const [scrollDirection, setScrollDirection] = useState(null);
      
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 0) {
              setScrollDirection('down');
            } else if (window.scrollY === 0) {
              setScrollDirection('up');
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        return (
          <div className="container">
            <div className="upper-div">
              <h1 className={`animated-text ${scrollDirection === 'down' ? 'animate-left' : ''}`}>
                Upper Div
              </h1>
            </div>
            <div className="lower-div">
              <h1 className={`animated-text ${scrollDirection === 'down' ? 'animate-right' : ''}`}>
                Lower Div
              </h1>
            </div>
          </div>
        );
      };

export default Animate;
