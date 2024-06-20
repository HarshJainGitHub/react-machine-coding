import React, { useContext } from "react";
import { FeatureFlag } from "./FeatureFlagContext";

const Feature = ({ feature, children, value }) => {
  const { features } = useContext(FeatureFlag);
  return features[feature] === value ? children : null;
};

const Example = () => {
  return (
    <>
      <Feature feature="darkMode" value={true}>
        <h1>In Dark Mode</h1>
      </Feature>
      <Feature feature="Chat" value={true}>
        <h1>Enable Chat Mode</h1>
      </Feature>
    </>
  );
};

export default Example;
