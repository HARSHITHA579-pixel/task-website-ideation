import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

// first component rendered to the DOM & sits at the very top of our application - root component. All other components are nested inside this component
function App() {
  // this is not HTML, this is JSX. A compiler - Babel converts JSX to HTML. JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within your JavaScript code, making it easier to create and manage UI components in React.

  // const title = "Welcome to React";
  // React converts everything into string to output it, except booleans & objects
  // const likes = 50;
  // const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          {/* <h1>{title}</h1>
          <p>Liked {likes} times</p>
          <p>{10}</p>
          <p>{"Hello ninjas"}</p>
          <p>{[1,2,3,4,5]}</p>
          <p>{Math.random()*10}</p>

          <a href={link}>Google</a> */}
            {/* sending fresh request to server, not using router. reason: not use <a> but use Link. At its core its a <a> tag that tries to send request ot server however, built into this tag is a functionality that facilitates React Router to intercept the request and handle on its own.  */}
            {/* shows a component at a time top to bottom */}
            <Switch>
              {/* route goes top to bottom and checks for membership of path. To get to the exact path use the keyword 'exact' */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>

        </div>
      </div>
    </Router>
  );
}
// a component in nutshell is a function that returns JSX. This function is exported and can be imported in files such as index.js where it is rendered to the DOM by ReactDOM library.
export default App;
