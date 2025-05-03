import "./App.css";
import { FeatureFlagProvider } from "./FeatureFlag/FeatureFlagContext";
import Example from "./FeatureFlag/Example";
import Batch from "./BatchAPICalls/Batch";
import CounterExample from "./CustomHooks/CounterExample";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import InfiniteScrollIO from "./InfiniteScroll/InfiniteScrollIO";

function App() {
  return (
    <>
      {/* Consist Implementation of Feature Flag Implementation */}
      {/* <FeatureFlagProvider>
        <Example />
      </FeatureFlagProvider> */}

      {/* Consist Implementation of Batch API Calls */}
      {/* <Batch /> */}

      {/* Consist Implementation of Counter Example */}
      {/* <CounterExample /> */}
      {/* Infinite Scroll Implementation */}
      {/* <InfiniteScroll /> */}
      <InfiniteScrollIO />
    </>
  );
}

export default App;
