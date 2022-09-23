import "./App.css";
import { useState } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import BlogsPage from "./Components/BlogsPage";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Header user={user} />
      {!user && <Login setUser={setUser} />}
      {user && <BlogsPage user={user} />}
    </div>
  );
};

export default App;
