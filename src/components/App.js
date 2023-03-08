import { Home, Login } from '../Pages';
import { Loader, Navbar } from './';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn';

function App() {
  if (auth.loading) {
    return <Loader />;
  }

  const Page404 = () => {
    return <h1>404</h1>;
  };

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        {/* enclosed all router inside it and comp*/}
        <Router>
          {/* inside router because Link component in react-router-dom need component that use it inside(enclosed) router component, want to render navbar for each route change*/}
          <Navbar />
          {/*Routes act as switch/if-else-if only once route execute among many that matches first and not execute further  */}
          <Routes>
            {/* Routes that match with url */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
