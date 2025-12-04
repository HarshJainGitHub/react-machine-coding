import "./App.css";
import { FeatureFlagProvider } from "./FeatureFlag/FeatureFlagContext";
import Example from "./FeatureFlag/Example";
import Batch from "./BatchAPICalls/Batch";
import CounterExample from "./CustomHooks/CounterExample";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import InfiniteScrollIO from "./InfiniteScroll/InfiniteScrollIO";
import Clock from "./AnalogClock/Clock";
import Counter from "./Counter/Counter";
// import Accordion from "./Accordion/onlyCss/Accordion";
import Accordion from "./Accordion/withJS/Accordion";
import NestedCheckbox from "./NestedCheckbox/NestedCheckbox";
import ProgressBar from "./ProgressBar/ProgressBar";
import FileExplorer from "./FileExplorer/FileExplorer";
import Modal from "./Modal/Modal";
import AppTest from "./Modal/AppTest";

 const bars = [0, 5, 10, 15, 30, 60, 75, 90, 100];

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
      {/* <InfiniteScroll />
      <InfiniteScrollIO /> */}
      {/* <Counter /> */}
      {/* <Accordion /> */}
      {/* <Clock /> */}

      {/* Nested Checkbox Implementation */}
      {/* <NestedCheckbox /> */}
      {/* <Accordion /> */}
      {/* {
        bars.map((bar,index) => (
          <ProgressBar key={index} progress={bar} />
        ))
      } */}

      {/* <FileExplorer /> */}

      <AppTest />

    </>
  );
}

export default App;
