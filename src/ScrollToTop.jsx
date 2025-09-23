import { useState, useEffect } from "react";

function ScrollToTop() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      setVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div className="scroll-to-top" onClick={handleClick}>
          <svg className="progress-ring" width="50" height="50">
            <circle
              className="progress-ring__circle"
              stroke="#00d9ff"
              strokeWidth="4"
              fill="transparent"
              r="22"
              cx="25"
              cy="25"
              style={{
                strokeDasharray: 2 * Math.PI * 22,
                strokeDashoffset: 2 * Math.PI * 22 * (1 - scrollPercent / 100),
              }}
            />
          </svg>
          <span className="arrow">↑</span>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
