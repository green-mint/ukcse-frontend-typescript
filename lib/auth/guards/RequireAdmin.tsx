import { useRouter } from "next/router";
import { ReactElement } from "react";
import useAuth from "../useAuth";

export default function RequireAdmin({ children }: { children: ReactElement }) {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.user || !auth.isAuthenticated || auth.user.role !== "admin") {
    router.replace("/");
    return null;
  }
  return children;
}
