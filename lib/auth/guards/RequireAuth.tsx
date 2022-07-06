import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import useAuth from "../useAuth";

export default function RequireAuth({ children }: { children: ReactElement }) {
  const auth = useAuth();
  const router = useRouter();
  if (!auth.isAuthenticated) {
    router.replace("/auth/signin");
    return null;
  }
  return children;
}