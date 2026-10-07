import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import AuthLayout from "./AuthLayout";
import Input from "../../ui/Input";
import SubmitButton from "../../ui/SubmitButton";
import Error from "../../components/Error";
import {
  createHandleBlur,
  IsAllInputValuesProvided,
} from "../../utils/FormsUtils";
import { useAuth } from "../../context/useAuthData";
import { getFriendlyErrorMessage } from "../../utils/errorMessages";
import AuthLink from "../../ui/AuthLink";

const inputFieldNames = {
  email: "Email",
  password: "Password",
};

const Login = () => {
  const navigate = useNavigate();

  const { login, loading, error, setError, setLoading } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [inputFieldErrors, setInputFieldErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = createHandleBlur(inputFieldNames, setInputFieldErrors);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!IsAllInputValuesProvided(form, inputFieldNames, setInputFieldErrors)) {
      return;
    }
    setLoading(true);

    try {
      const result = await login(form.email, form.password, setError);
      if (result && result.role === "owner") {
        navigate("/owner");
      } else if (result && result.role) {
        navigate("/projets");
      }
    } catch (err) {
      console.log("FULL FIREBASE ERROR:", err.response?.data);
      setError(getFriendlyErrorMessage(err.message, "login"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Munir InfraTech"
      description="Sign in to manage your construction sites."
      Icon={"MIT"}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email Address"
          inputConfig={{
            type: "email",
            name: "email",
            placeholder: "your@email.com",
            onBlur: handleBlur,
            value: form.email,
            onChange,
          }}
          inputValueError={inputFieldErrors.email}
          icon={Mail}
        />

        <div className="relative">
          <Input
            label="Password"
            inputConfig={{
              type: "password",
              name: "password",
              placeholder: "••••••••",
              onBlur: handleBlur,
              value: form.password,
              onChange,
            }}
            inputValueError={inputFieldErrors.password}
            icon={Lock}
          />
        </div>

        <Error error={error} />

        <SubmitButton
          disabled={loading}
          updatingForm="Signing In..."
          updateForm="Sign In"
        />

        <AuthLink start={"Don't"} end={"up"} />
      </form>
    </AuthLayout>
  );
};

export default Login;
