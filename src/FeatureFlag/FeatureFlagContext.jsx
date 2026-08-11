import React, { useState } from "react";

export const FeatureFlag = React.createContext({});

//@ts-ignore
export const FeatureFlagProvider = ({ children }) => {
  //@ts-ignore
  const [features, setFeatures] = useState({
    darkMode: true,
    chatMode: false,
  });

  return (
    <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
  );
};
