import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup/NewMeetup";
import favoritesPage from "./pages/Favorites/Favorites";
import Layout from "./layout/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={AllMeetupsPage} />
          <Route path="/new-meetup" exact component={NewMeetupPage} />
          <Route path="/favorites" exact component={favoritesPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
