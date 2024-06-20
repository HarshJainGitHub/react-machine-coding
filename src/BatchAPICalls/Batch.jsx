import { useState, useEffect } from "react";

// helper function to create promise task
// that resolves randomly after some time
const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 1000);
  });
};

// helper function to create sub arrays of given size
const chop = (arr, size = arr.length) => {
  //temp array
  const temp = [...arr];

  //output
  const output = [];
  let i = 0;

  //iterate the array
  while (i < temp.length) {
    //slice the sub-array of given size
    //and push them in output array
    output.push(temp.slice(i, i + size));
    i = i + size;
  }

  return output;
};

const Batch = () => {
  // array of promises
  // 20
  const promises = [
    asyncTask(1),
    asyncTask(2),
    asyncTask(3),
    asyncTask(4),
    asyncTask(5),
    asyncTask(6),
    asyncTask(7),
    asyncTask(8),
    asyncTask(9),
    asyncTask(10),
    asyncTask(11),
    asyncTask(12),
    asyncTask(13),
    asyncTask(14),
    asyncTask(15),
    asyncTask(16),
    asyncTask(17),
    asyncTask(18),
    asyncTask(19),
    asyncTask(20),
  ];

  // sub array of promises of size 5
  // 4 sub arrays in total
  const subArrays = chop(promises, 5);

  // to track the indexes of subarrays
  const [index, setIndex] = useState(0);

  // helper function to perform the asyncoperations
  const asyncOperations = async (promises) => {
    try {
      // execute all the promises of sub-array togther
      const resp = await Promise.all(promises);

      // print the output of the current sub array
      console.log(index, resp);
    } catch (e) {
      console.log(e);
    } finally {
      // update the index after the operation
      if(index < subArrays.length - 1) {
        setIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    // run first promise after 5 second
    if (index === 0) {
      setTimeout(() => {
        asyncOperations(subArrays[index]);
      }, 5000);
    }
    // and the remaining promises after the previous one is done
    else {
      asyncOperations(subArrays[index]);
    }
  }, [index]);

  return <></>;
};

export default Batch;