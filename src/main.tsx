import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import './index.scss'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<div></div>}>
    <App store={store}/>
  </Suspense>
);

store.subscribe(() => {
  root.render(
    <Suspense fallback={<div></div>}>
      <App store={store}/>
    </Suspense>
  );
})
