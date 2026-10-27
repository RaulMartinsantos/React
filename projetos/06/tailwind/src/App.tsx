import Routes from "./routes";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <AuthContext.Provider value={{ name: "Raul", email: "raul@email.com" }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
