import { createContext } from "react";
import { Signin_signIn, Signin_signIn_user } from "../graphql/interfaces/Signin";

export type AuthInterface = {
  isAuthenticated: boolean;
  user?: Signin_signIn_user;
  token?: string;
  loading: boolean;
  signin: (auth: Signin_signIn) => void;
  signout: () => void;
} 

const AuthContext = createContext<AuthInterface>({
  isAuthenticated: false,
  user: undefined,
  token: undefined,
  loading: false,
  signin: (auth: Signin_signIn) => {},
  signout: () => {}
});

export default AuthContext;
