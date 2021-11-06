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


function App() {
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
