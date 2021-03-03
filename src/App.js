import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import AppleLogin from "react-apple-login";
function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <GoogleLogin
        clientId="341686949466-evuq9h66d7tuonndjgn50ik6np7sbeoh.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <AppleLogin
        clientId={"ngoctiennguyen155@gmail.com"}
        redirectURI={"https://redirectUrl.com"}
        responseType={"code"}
        responseMode={"query"}
        usePopup={false}
        designProp={{
          height: 30,
          width: 140,
          color: "black",
          border: false,
          type: "sign-in",
          border_radius: 15,
          scale: 1,
          locale: "en_US",
        }}
      />
      <FacebookLogin
        appId="426927748516709"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
      <p>
        https://graph.facebook.com/userid?fields=birthday,email,name,hometown&access_token=access_token
      </p>
    </div>
  );
}

export default App;
