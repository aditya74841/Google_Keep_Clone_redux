
//components
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import Redux from './components/Redux';
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <DataProvider>
    <Provider store={store}>
      <Home />
      {/* <Redux/> */}
    </Provider>
    </DataProvider>
  );
}

export default App;
