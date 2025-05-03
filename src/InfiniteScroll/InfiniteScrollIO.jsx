import React, { useState, useRef, useEffect } from "react";
import "../InfiniteScroll/infiniteScroll.css";

const InfiniteScrollIO = () => {
  const [data, setData] = useState([...new Array(40)]);
  const [isLoading, setLoading] = useState(false);
  const refList = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        setLoading(true);
        loadMore();
      }
    });

    const lastElement = refList.current[refList.current.length - 1];
    observer.observe(lastElement);
    return () => {
      observer.disconnect();
    }
  }, [data.length]);

  function loadMore() {
    setTimeout(() => {
      setData((prev) => [...prev, ...new Array(10)]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="infinite-scroll-container">
      {data.map((ele, index) => {
        return (
          <div
            ref={(ele) => (refList.current[index] = ele)}
            className="row"
            key={index}
          >
            {index + 1}
          </div>
        );
      })}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScrollIO;

// disadvantage of using this
// overload of dom element in ui

// solution
// infinite scroll with virtualization
