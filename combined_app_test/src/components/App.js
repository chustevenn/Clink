import React from 'react';
//import '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';

//Page imports
/*
import AboutPage from './about_page.js';

import SearchHomePage from './Search/search_home.js';
import SearchSportsForm from './Search/search_sports_form.js';
import SearchMoviesForm from './Search/search_movies_form.js';
import SearchOutdoorForm from './Search/search_outdoor_form.js';
import SearchIndoorForm from './Search/search_indoor_form.js';
import SearchCuisineForm from './Search/search_cuisine_form.js';
import SearchArtsForm from './Search/search_arts_form.js';

import ChangeProfilePage from './Change_Profile/profile_change_home.js';
import SportsForm from './Change_Profile/sports_form.js';
import MoviesForm from './Change_Profile/movies_form.js';
import OutdoorForm from './Change_Profile/outdoor_form.js';
import IndoorForm from './Change_Profile/indoor_form.js';
import CuisineForm from './Change_Profile/cuisine_form.js';
import ArtsForm from './Change_Profile/arts_form.js';

import LoginPage from './login_page.js';
import SignupPage from './signup_page.js';
import MessagesPage from './messages.js';
import FeedPage from './feed.js';*/

// ///////////////
//Form selection arrays
// ///////////////





// ///////////////
// End
// ///////////////


//If first time rendering, set login status to false
if(JSON.parse(sessionStorage.getItem("isLoggedIn")) === null)
{
  sessionStorage.setItem("isLoggedIn", "false");
}


function logOut()
{
  sessionStorage.clear();
  sessionStorage.setItem("isLoggedIn", "false");
  window.location="/login";
}


function getLinkButtons(loggedIn)
{
  if(loggedIn)
    {
	const name = sessionStorage.getItem("username");
	const room = "clink";
    return (
      <div className="button-group">

        <Link to='/about'>
          <button className="link-button1">About</button>
        </Link>

        <Link to='/search'>
          <button className="link-button1">Search</button>
        </Link>

        <Link to='/feed'>
          <button className="link-button1">Feed</button>
        </Link>

        <Link to='/change_profile/sports'>
          <button className="link-button1">Profile</button>
        </Link>
	   
	    <Link to={`/messages?name=${name}&room=${room}`}>
        <button className="link-button1">Messages</button>
	</Link>
	
        <Link to='/change_profile'>
          <button id="change-profile-button">Change Profile</button>
        </Link>

        <button className="link-button1" onClick={logOut}>Log Out</button>

      </div>
    );
  }
  else
  {
    return (
      <div className="button-group">

        <Link to='/about'>
          <button className="link-button1">About</button>
        </Link>

        <Link to='/login'>
          <button className="link-button1">Log In</button>
        </Link>

        <Link to='/signup'>
          <button className="link-button1">Sign Up</button>
        </Link>

      </div>
    );
  }
}

function getRouter(loggedIn)
{
  if(loggedIn)
  {
    return (
      <Switch>
        <Route exact path="/" component={AboutPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/search" component={SearchHomePage} />
        <Route exact path ="/feed" component={FeedPage} />
        <Route exact path="/change_profile" component={ChangeProfilePage}/>
	      <Route exact path="/messages" component={MessagesPage}/>

        <Route exact path="/search/sports" 
          render={(props) =>
            <SearchSportsForm {...props}
              title={"Sports Preferences"}
              entries={sportsList}
              searchType={"sports"}
              trueEntries={[]}
              maxEntries={5}
              nextPageLink={"/search/movies"}
            />
          }
        />

        <Route exact path="/search/movies" 
          render={(props) =>
            <SearchMoviesForm {...props}
              title={"TV/Movie Preferences"}
              entries={movieList}
              searchType={"movies"}
              trueEntries={[]}
              maxEntries={4}
              nextPageLink={"/search/outdoor_activities"}
            />
          }
        />

        <Route exact path="/search/outdoor_activities" 
          render={(props) =>
            <SearchOutdoorForm {...props}
              title={"Favorite Outdoor Activities"}
              entries={outdoorList}
              searchType={"outdoor"}
              trueEntries={[]}
              maxEntries={3}
              nextPageLink={"/search/indoor_activities"}
            />
          }
        />

        <Route exact path="/search/indoor_activities" 
          render={(props) =>
            <SearchIndoorForm {...props}
              title={"Favorite Indoor Activities"}
              entries={indoorList}
              searchType={"indoor"}
              trueEntries={[]}
              maxEntries={3}
              nextPageLink={"/search/cuisines"}
            />
          }
        />

        <Route exact path="/search/cuisines" 
          render={(props) =>
            <SearchCuisineForm {...props}
              title={"Favorite Types of Food"}
              entries={cuisineList}
              searchType={"cuisines"}
              trueEntries={[]}
              maxEntries={4}
              nextPageLink={"/search/arts_and_media"}
            />
          }
        />

        <Route exact path="/search/arts_and_media" 
          render={(props) =>
            <SearchArtsForm {...props}
              title={"Arts, Theater, and Media Activities"}
              entries={artsList}
              searchType={"arts"}
              trueEntries={[]}
              maxEntries={3}
              nextPageLink={"/search"}
            />
          }
        />
	    
        <Route exact path="/change_profile/sports" 
          render={(props) =>
            <SportsForm {...props}
              title={"Sports Preferences"}
              entries={sportsList}
              profileType={"sports"}
              trueEntries={JSON.parse(sessionStorage.getItem("profile_sports"))}
              maxEntries={5}
              nextPageLink={"/change_profile/movies"}
            />
          }
        />

        <Route exact path="/change_profile/movies" 
          render={(props) =>
            <MoviesForm {...props}
              title={"TV/Movie Preferences"}
              entries={movieList}
              profileType={"movies"}
              trueEntries={JSON.parse(sessionStorage.getItem("profile_movies"))}
              maxEntries={4}
              nextPageLink={"/change_profile/outdoor_activities"}
            />
          }
        />

        <Route exact path="/change_profile/outdoor_activities" 
          render={(props) =>
            <OutdoorForm {...props}
              title={"Favorite Outdoor Activities"}
              entries={outdoorList}
              profileType={"outdoor"}
              trueEntries={JSON.parse(sessionStorage.getItem("profile_outdoor"))}
              maxEntries={3}
              nextPageLink={"/change_profile/indoor_activities"}
            />
          }
        />

        <Route exact path="/change_profile/indoor_activities" 
          render={(props) =>
            <IndoorForm {...props}
              title={"Favorite Indoor Activities"}
              entries={indoorList}
              profileType={"indoor"}
              trueEntries={JSON.parse(sessionStorage.getItem("profile_indoor"))}
              maxEntries={3}
              nextPageLink={"/change_profile/cuisines"}
            />
          }
        />

        <Route exact path="/change_profile/cuisines" 
          render={(props) =>
            <CuisineForm {...props}
              title={"Favorite Types of Food"}
              entries={cuisineList}
              profileType={"cuisines"}
              trueEntries={JSON.parse(sessionStorage.getItem("profile_cuisines"))}
              maxEntries={4}
              nextPageLink={"/change_profile/arts_and_media"}
            />
          }
        />

        <Route exact path="/change_profile/arts_and_media" 
          render={(props) =>
            <ArtsForm {...props}
              title={"Arts, Theater, and Media Activities"}
              entries={artsList}
              profileType={"arts"}
              trueEntries={JSON.parse(sessionStorage.getItem("profile_arts"))}
              maxEntries={3}
              nextPageLink={"/change_profile"}
            />
          }
        />

        <Redirect to={sessionStorage.getItem("lastValidPage")}/>
      </Switch>
    );
  }
  else
  {
    return (
      <Switch>
        <Route exact path="/" component={AboutPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignupPage}/>
      
        <Redirect to="/login"/>
      </Switch>
    );
  }
}

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      hasSetLogin: false
    }
  }

  render()
  {
    var loggedIn;

    if(this.state.hasSetLogin)
    {
      loggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    }
    else
    {
      loggedIn = false;
      this.setState({ hasSetLogin: true });
    }

    return (
      <div className="App">
        <img src='/clink_logo.jpg' alt="Clink logo" id="page-logo"/>

        <div className="App">{this.props.children}</div>
      
      </div>
    );
  }
}

export default App;

/* <hr/>
        {getLinkButtons(loggedIn)}
        <hr/>

        {getRouter(loggedIn)} */