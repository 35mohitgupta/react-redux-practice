import React from 'react';
import './App.css';
// import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import UserContainer from './component/UserContainer';
import UsingMemoizedSelectorWithProp from './component/UsingMemoizedSelectorWithProp';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        {/* <CakeContainer/> */}
        <UserContainer/>
        <UsingMemoizedSelectorWithProp prefix="M"/>
        <UsingMemoizedSelectorWithProp prefix="K"/>
      </div>
    </Provider>
  );
}

export default App;
