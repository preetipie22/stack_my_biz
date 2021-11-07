import UserLogin from './userLogin';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Route, Switch } from "react-router";
import UserProfile from './userProfile';
import { initializeApp } from "firebase/app";


function App() {

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBXQq5li2s4-6aN6H3GgRW0h-NUxswY5lw",
    authDomain: "stack-my-biz-10473.firebaseapp.com",
    projectId: "stack-my-biz-10473"
  });

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
