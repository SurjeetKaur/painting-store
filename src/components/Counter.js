import { useState, useEffect } from "react";

function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stepTime = 20; // interval in ms
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <div className="text-3xl font-bold text-orange">{count}+</div>;
}

export default Counter;

