import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./src/Client/App.jsx";
import store from './src/Client/store';

// import './index.css';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );


// reportWebVitals();

//BACKEND ROCKS

// ReactDOM.render(<App/>,document.querySelector("#root"));
render(
  <Provider store={store}> <App /> </Provider>,
  document.querySelector("#root")
);