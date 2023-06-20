import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<div>加载中。。。</div>}>
    <App />
  </Suspense>
);

