import React from 'react';

import Form from './form/index'
import Main from './main/index'

import './global.css';
import './app.css';

function App() {
  return (
   <div id="app">
     <aside>
      <Form />
     </aside>
     <main>
      <Main />
     </main>
   </div>
  );
}

export default App;
