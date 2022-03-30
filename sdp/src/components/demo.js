import React from 'react';

import amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../aws-exports';

amplify.configure(config)

function Login({signOut, user }){
  return(
    <div className="App">
      <header className="App-header">
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>

  );
};
export default withAuthenticator(Login);