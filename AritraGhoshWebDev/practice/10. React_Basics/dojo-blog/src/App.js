import Navbar from './Navbar';
import Home from './Home'

// first component rendered to the DOM & sits at the very top of our application - root component. All other components are nested inside this component
function App() {
  // this is not HTML, this is JSX. A compiler - Babel converts JSX to HTML. JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within your JavaScript code, making it easier to create and manage UI components in React.

  // const title = "Welcome to React";
  // React converts everything into string to output it, except booleans & objects
  // const likes = 50;
  // const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Hello ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>

        <a href={link}>Google</a> */}
      </div>
    </div>
  );
}
// a component in nutshell is a function that returns JSX. This function is exported and can be imported in files such as index.js where it is rendered to the DOM by ReactDOM library.
export default App;
