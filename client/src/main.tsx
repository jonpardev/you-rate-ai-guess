import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
import App from './App';
import './index.css';
import ErrorPage from './routes/ErrorPage';
import Landing from './routes/Landing';
import Result from './routes/Result/Result';
import Review from './routes/Review';
import Search from './routes/Search';
// Redux
import { Provider } from 'react-redux';
import { store } from './helpers/redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
          <Route path='search' element={<Search />} />
          <Route path='review' element={<Review />} />
          <Route path='result' element={<Result />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
  </Provider>
)
