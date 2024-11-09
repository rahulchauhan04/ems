// import {useEffect} from "react";
// import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'

const AuthContext = ({children}) => {
  return (

      // useEffect(() => {
        //   setLocalStorage();
        //   getLocalStorage();
        // });

     <div>
          { children }
     </div>
  )
};

export default AuthContext;
