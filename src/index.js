import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from "./App";

// ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(<AppContainer />, document.getElementById('root'));

//rerenderEntireThree(store.getState());

// store.subscribe(() => {
//   const state = (store.getState());
//   rerenderEntireThree(state);
// })


