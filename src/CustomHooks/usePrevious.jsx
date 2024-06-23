// Ques: create a hook in react that remembers the previous value of a state
// Solution: we need to use useRef & useEffect to create usePrevious Hook.
// useRef to persist data between the renders &
// useEffect to manage side effects during life cycle events.
// by default first will return undefined as there is no value during inital render.

import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const previousRef = useRef();

  useEffect(() => {
    if(value) {
      previousRef.current = value;
    }
  },[value]);

  return previousRef.current;
}