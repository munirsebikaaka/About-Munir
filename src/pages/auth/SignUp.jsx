import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, User, UserPlus } from "lucide-react";

import Input from "../../ui/Input";
import SubmitButton from "../../ui/SubmitButton";
import Error from "../../components/Error";

import { createHandleBlur } from "../../utils/FormsUtils";
import {
  IsAllInputValuesProvided,
  validatePassword,
} from "../../utils/FormsUtils";

import { useAuth } from "../../context/useAuthData";
import { getFriendlyErrorMessage } from "../../utils/errorMessages";
import { fetchData } from "../../api/data";
import SignUpDisabled from "../../components/SignupDisabled";
import AuthLayout from "./AuthLayout";
import AuthLink from "../../ui/AuthLink";
import { toast } from "react-toastify";

const inputFieldNames = {
  fullName: "Full Name",
  email: "Email",
  password: "Password",
  confirmPassword: "Confirm Password",
};

const SignUp = () => {
  const navigate = useNavigate();

  const {
    signUp: signUpToDatabase,
    loading,
    error,
    setError,
    setLoading,
  } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [inputFieldErrors, setInputFieldErrors] = useState({});
  const [fetchingUser, setFetchingUser] = useState(false);
  const [ownerAccountExists, setOwnerAccountExists] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleBlur = createHandleBlur(inputFieldNames, setInputFieldErrors);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!IsAllInputValuesProvided(form, inputFieldNames, setInputFieldErrors)) {
    //   return;
    // }
    // if (!validatePassword(form.password)) {
    //   setPasswordError(
    //     "Strengthen your password by adding uppercase letters, lowercase letters, numbers, and symbols.",
    //   );
    //   return;
    // }
    // if (form.password !== form.confirmPassword) {
    //   setPasswordError("Passwords do not match.");
    //   return;
    // }

    setLoading(true);
    try {
      const result = await signUpToDatabase(
        form.email,
        form.password,
        form.fullName,
      );

      if (result) {
        navigate("/owner");
        toast.success("Owner account registered succesfully!");
      }
    } catch (err) {
      setError(getFriendlyErrorMessage(err.message, "signup"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setFetchingUser(true);
      try {
        const users = await fetchData("users", setError);
        const isOwnerAccountExists = users.some(
          (user) => user?.role.toLowerCase() === "owner",
        );
        setOwnerAccountExists(isOwnerAccountExists);
      } catch (err) {
        setError(getFriendlyErrorMessage(err.message, "fetch"));
      } finally {
        setFetchingUser(false);
      }
    };
    fetchUsers();
  }, [setError]);

  if (fetchingUser) return <p>loading...</p>;

  if (ownerAccountExists) return <SignUpDisabled />;

  return (
    <AuthLayout
      title={"Create Owner Account page"}
      description={
        "Create an owner account to use while managing company system."
      }
      Icon={UserPlus}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          inputConfig={{
            type: "text",
            name: "fullName",
            placeholder: "John Doe",
            onBlur: handleBlur,
            value: form.fullName,
            onChange,
          }}
          inputValueError={inputFieldErrors.fullName}
          icon={User}
        />

        <Input
          label="Email"
          inputConfig={{
            type: "email",
            name: "email",
            placeholder: "owner@business.com",
            onBlur: handleBlur,
            value: form.email,
            onChange,
          }}
          inputValueError={inputFieldErrors.email}
          icon={Mail}
        />

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

        <Input
          label="Confirm Password"
          inputConfig={{
            type: "password",
            name: "confirmPassword",
            placeholder: "••••••••",
            onBlur: handleBlur,
            value: form.confirmPassword,
            onChange,
          }}
          inputValueError={inputFieldErrors.confirmPassword}
          icon={Lock}
        />

        <Error message={error || passwordError}>{error || passwordError}</Error>

        <div className="pt-2">
          <SubmitButton
            disabled={loading}
            updatingForm={"Registering Owner Account..."}
            updateForm={"Register Owner Account"}
          />
        </div>
      </form>
      <AuthLink start={"Already"} end={"in"} />
    </AuthLayout>
  );
};

export default SignUp;
