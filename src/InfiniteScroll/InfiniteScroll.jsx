import React, { useState } from "react";
import "../InfiniteScroll/infiniteScroll.css";

const SCROLL_THRESHOLD = 20;

const InfiniteScroll = () => {
  const [data, setData] = useState([...new Array(40)]);
  const [isLoading, setLoading] = useState(false);

  function handleScroll(event) {
    //cursor pointing to the height of the container
    const scrollTop = event.target.scrollTop;
    // total height of the container
    const scrollHeight = event.target.scrollHeight;
    // return viewable height of the element
    const clientHeight = event.target.clientHeight;
    const remainingScroll = scrollHeight - (scrollTop + clientHeight);

    if (remainingScroll < SCROLL_THRESHOLD && !isLoading) {
      setLoading(true);
      loadMore();
    }
  }

  function loadMore() {
    setTimeout(() => {
      setData((prev) => [...prev, ...new Array(10)]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div onScroll={handleScroll} className="infinite-scroll-container">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="row" >
              {index}
            </div>
          </div>
        );
      })}
    {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
