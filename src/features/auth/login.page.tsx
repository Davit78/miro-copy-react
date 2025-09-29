import { AuthLayout } from "./ui/auth-layout";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { LoginForm } from "./ui/login-form";

function LoginPage() {
  return (
    <AuthLayout
      form={<LoginForm />}
      title="Log In"
      description="Enter your Email and Password"
      footerText={<>Don't have account? <Link to={ROUTES.REGISTER}>Sign Up</Link></>}
    />
  );
}

export const Component = LoginPage;
