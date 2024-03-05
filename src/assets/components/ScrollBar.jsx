import { useEffect, useState } from "react";

export default function ScrollBar() {
  const [Percent, setPercent] = useState();

  function spyScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const documentHeight = scrollHeight - clientHeight;
    setPercent((scrollTop / documentHeight) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", spyScroll);
  }, []);

  return (
    <div className="scrollBarContainer">
      <div className="scrollBar">
        <div className="scrollBarFilter">
          <div className="scrollBtn" style={{ height: `${Percent}%` }}></div>
        </div>
      </div>
    </div>
  );
}
