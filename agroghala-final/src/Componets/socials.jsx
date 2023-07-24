import { google_id, google_secret_key, twitter_id, twitter_secret_key } from './secrets'
import GoogleLogin from 'react-google-login';
import React, { gapi } from 'gapi-script';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SocialAuth = () => {
  const googleclientId = {google_id};
  const onSuccess = async (res) => {
    console.log('succzddgsfgess:', res.accessToken);
    const user = {
      "grant_type":"convert_token",
      "client_id": {google_id},
      "client_secret": {google_secret_key},
      "backend":"google-oauth2",
      "token": res.accessToken
    }
  

  const {data} = await axios.post('http://localhost:8000/apiauth/', user ,{headers: {
                'Content-Type': 'application/json'
            }}, {withCredentials: true});
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access_token']}`;
            localStorage.clear();
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            window.location.href = '/'
      }

      const onFailure = (err) => {
        console.log('failed:', err);
      };
    

  return (
        <div className='d-flex justify-content-around px-5 pb-3'>
          <a><GoogleLogin
            clientId={googleclientId}
            buttonText='Continue with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}>
            </GoogleLogin></a>
        </div>
  );
};
export default SocialAuth;