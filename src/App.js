import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId='220361668988-deou3v6ec0kfdqlkb6hpppu3b33binqd.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
     <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
