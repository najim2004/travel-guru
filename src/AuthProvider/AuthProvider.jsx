import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = { userRegister, user };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
