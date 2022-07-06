import { useEffect, useState } from "react";
import client from "../graphql";
import { Signin_signIn } from "../graphql/interfaces/Signin";
import AuthContext from "./AuthContext";

export type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useProvideAuth();
  
  if (auth.loading) return null;
  
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [ auth, setAuth ] = useState<Signin_signIn | null>(null);
  const [loading, setLoading] = useState(true);

  const signin = (auth: Signin_signIn ) => {
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("token", auth.token);
    setAuth(auth);
  }

  const signout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    client.clearStore();
    setAuth(null);
  }

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if (localAuth) {
      setAuth(JSON.parse(localAuth));
    }
    setLoading(false);
  }, [])

  return {
    user: auth?.user,
    isAuthenticated: !!auth?.user,
    token: auth?.token,
    loading,
    signin,
    signout,
  }
}