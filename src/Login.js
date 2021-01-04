import { Link } from "react-router-dom";
import "./Login.css";
import FirebaseUI from "./FirebaseUI.js";

function Login() {

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cdn.cp.adobe.io/content/2/dcx/cddd7656-7984-40e3-a24a-31eaf899b2c2/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/208"
        />
      </Link>

      <div className="login__container">
        <FirebaseUI />

        <p>
          By signing in you agree to LetsBuy Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Internet-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
