import {Provider} from 'react-redux'
import CreateUser from './magazines/createUser/createUser'
import store from './redux/store'
// import Main from './components/main'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     {/* <Main></Main> */}
     <CreateUser></CreateUser>
    </div>
    </Provider>
  );
}

export default App;
