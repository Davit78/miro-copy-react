import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { RegisterForm } from "./ui/register-form";

function RegisterPage() {
  return (
    <AuthLayout
      form={<RegisterForm />}
      title="Sign Up"
      description="Create an account"
      footerText={
        <>
          Already have an account? <Link to={ROUTES.LOGIN}>Log In</Link>
        </>
      }
    />
  );
}

export const Component = RegisterPage;
