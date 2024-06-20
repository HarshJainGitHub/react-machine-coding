import './App.css';
import { FeatureFlagProvider } from './FeatureFlag/FeatureFlagContext'
import Example from './FeatureFlag/Example';
import Batch from './BatchAPICalls/Batch';

function App() {

  return (
    <>
      <FeatureFlagProvider>
        <Example />
      </FeatureFlagProvider>
      <Batch />
    </>
  )
}

export default App;
