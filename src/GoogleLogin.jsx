import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Avatar from '@mui/material/Avatar';

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const responseGoogle = (response) => {
    if (response.profileObj) {
      setUser(response.profileObj);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <Avatar alt={user.name} src={user.imageUrl} />
          <h2>{user.name}</h2>
        </div>
      ) : (
        <GoogleLogin
          clientId="421292027230-mcedk3c7i5s136jho17deuj548a56p0o.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default GoogleLoginButton;
