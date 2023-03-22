import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from 'react-loader-spinner';
import { useParams } from "react-router";
import "./VerifyPage.css";

function VerifyPage() {
  const params = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter == 0) history.push("/login");;
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  useEffect(async () => {
    console.log(params)
    // const response = await axios.get('http://191.96.1.43:5000/api/v1/user/63c131f87ee1376d92317a32/verify/73b33c483d70d01502d78f8ccb1851e661a719eba35b8e1b4b04a50f511fc10a');
    const response = await axios.get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/${params.id}/verify/${params.token}`);
    if (response.status === 200) setIsSuccess(true);
    else setIsSuccess(false)
    setIsLoading(false)
    // setTimer()
  }, [])
  return (
    <div className='VerifyPage'>{isLoading ?
      <InfinitySpin
        width='200'
        color="#6e5a2f"
      /> : isSuccess ? 'Successfully Verified' : 'Verify failed!'}
      {!isLoading && isSuccess && <div className="Redirect">Redirect to login page in {counter}sec</div>}

    </div>
  );
}

export default VerifyPage;