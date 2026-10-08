import { useState } from "react";
import { Mail, Lock, User, BriefcaseBusiness, UserPlus } from "lucide-react";
import Input from "../ui/Input";
import Sidebar from "../components/layout/Sidebar";
import HeaderBar from "../components/layout/HeaderBar";
import {
  createHandleBlur,
  IsAllInputValuesProvided,
} from "../utils/FormsUtils";
import { useAuth } from "../context/useAuthData";
import SubmitButton from "../ui/SubmitButton";
import Error from "../components/Error";
import { getFriendlyErrorMessage } from "../utils/errorMessages";
import { validatePassword } from "../utils/FormsUtils";
import { toast } from "react-toastify";

const roleOptions = [
  "project_manager",
  "site_supervisor",
  "finance",
  "store_manager",
  "worker",
];

const inputFieldNames = {
  name: "Full name",
  email: "Email",
  password: "Password",
  role: "Role",
  workerId: "Worker ID",
};

const WorkerRegistration = () => {
  const {
    registerWorker,
    loading,
    error,
    setError: setFetchingErrors,
    setLoading,
  } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "project_manager",
    workerId: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = createHandleBlur(inputFieldNames, setErrors);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!IsAllInputValuesProvided(form, inputFieldNames, setErrors)) {
      return;
    }
    if (!validatePassword(form.password)) {
      setFetchingErrors(
        "Strengthen your password by adding uppercase letters, lowercase letters, numbers, and symbols",
      );
      return;
    }
    setLoading(true);
    try {
      await registerWorker(
        form.email,
        form.password,
        form.name,
        form.role,
        form.workerId,
      );
      toast.success("Worker registered succesfully!");

      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        password: "",
        role: "project_manager",
        workerId: "",
      }));
    } catch (err) {
      setFetchingErrors(getFriendlyErrorMessage(err, "signup"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <div className="flex min-h-screen flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-4 md:p-6">
          <HeaderBar
            title="Register team member"
            subtitle="Add workers, project managers, supervisors, finance staff, and store personnel to the company system."
          />

          <div className="mt-6 rounded-2xl border border-border bg-surface p-4 shadow-sm md:p-6">
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-3xl space-y-4">
              <Input
                label="Full name"
                icon={User}
                inputConfig={{
                  name: "name",
                  value: form.name,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  placeholder: "Jane Doe",
                }}
                inputValueError={errors.name}
              />

              <Input
                label="Email address"
                icon={Mail}
                inputConfig={{
                  name: "email",
                  type: "email",
                  value: form.email,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  placeholder: "jane@company.com",
                }}
                inputValueError={errors.email}
              />

              <Input
                label="Employee ID"
                icon={BriefcaseBusiness}
                inputConfig={{
                  name: "workerId",
                  value: form.workerId,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  placeholder: "EMP-204",
                }}
                inputValueError={errors.workerId}
              />

              <label className="mb-4 block">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Role
                </span>
                <div className="relative">
                  <UserPlus
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                    size={18}
                  />
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-surface pl-11 pr-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-avatar">
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <Input
                label="Password"
                icon={Lock}
                inputConfig={{
                  name: "password",
                  type: "password",
                  value: form.password,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  placeholder: "Create secure password",
                }}
                inputValueError={errors.password}
              />

              <Error error={error} />

              <SubmitButton
                disabled={loading}
                updatingForm={"Registering Worker..."}
                updateForm={"Register Worker"}
              />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkerRegistration;
