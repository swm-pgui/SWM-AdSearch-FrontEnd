import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import SearchContainer from './containers/SearchContainer';

const App = () => {
  return (
    <div>
      <h1 className='App'>식품 허위 · 과대광고정보 알리미</h1>
      <SearchContainer />
    </div>
  )
}

export default App;
