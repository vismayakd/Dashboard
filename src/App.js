import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'; 
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        <div className="App">
          <Dashboard />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;