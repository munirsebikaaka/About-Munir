import { useState } from "react";
import { Building2, MapPin, FileText, CalendarDays } from "lucide-react";
import { postData } from "../api/data";
import Sidebar from "../components/layout/Sidebar";
import HeaderBar from "../components/layout/HeaderBar";
import Input from "../ui/Input";
import {
  createHandleBlur,
  IsAllInputValuesProvided,
} from "../utils/FormsUtils";
import { useAuth } from "../context/useAuthData";
import SubmitButton from "../ui/SubmitButton";
import { getFriendlyErrorMessage } from "../utils/errorMessages";
import Error from "../components/Error";
import { toast } from "react-toastify";

const inputFieldNames = {
  name: "Site name",
  location: "Location",
  description: "Description",
  startDate: "Start date",
  expectedEndDate: "Completion date",
  budget: "Budget",
};

const SiteRegistration = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    location: "",
    description: "",
    startDate: "",
    expectedEndDate: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});
  const [fetchError, setFecthError] = useState("");
  const [loading, setLoading] = useState(false);

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

    const project = {
      ...form,
      budget: +form.budget,
      status: "planning",
      createdAt: new Date().toISOString(),
      createdBy: user?.id,
      health: "Healthy",
      progress: 3,
    };

    setLoading(true);

    try {
      await postData(project, "projects", user?.idToken);
      toast.success("Project registered succesfully!");
      setForm((prev) => ({
        ...prev,
        name: "",
        location: "",
        description: "",
        startDate: "",
        expectedEndDate: "",
        budget: "",
      }));
    } catch (err) {
      setFecthError(getFriendlyErrorMessage(err));
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
            title="Register new site"
            subtitle="Create a new construction site and track progress, materials, budgets, and people from one place."
          />

          <div className="mt-6 rounded-2xl border border-border bg-surface p-4 shadow-sm md:p-6">
            <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Site name"
                  icon={Building2}
                  inputConfig={{
                    name: "name",
                    value: form.name,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    placeholder: "Nakawa Apartments",
                  }}
                  inputValueError={errors.name}
                />

                <Input
                  label="Location"
                  icon={MapPin}
                  inputConfig={{
                    name: "location",
                    value: form.location,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    placeholder: "Kampala, Uganda",
                  }}
                  inputValueError={errors.location}
                />

                <Input
                  label="Start date"
                  icon={CalendarDays}
                  inputConfig={{
                    name: "startDate",
                    type: "date",
                    value: form.startDate,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  }}
                  inputValueError={errors.startDate}
                />

                <Input
                  label="Completion date"
                  icon={CalendarDays}
                  inputConfig={{
                    name: "expectedEndDate",
                    type: "date",
                    value: form.expectedEndDate,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  }}
                  inputValueError={errors.expectedEndDate}
                />
              </div>

              <div className="mt-4">
                <Input
                  label="Project budget (UGX)"
                  icon={Building2}
                  inputConfig={{
                    name: "budget",
                    type: "number",
                    value: form.budget,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    placeholder: "850000000",
                  }}
                  inputValueError={errors.budget}
                />
              </div>

              <div className="mt-4">
                <Input
                  label="Project description"
                  icon={FileText}
                  inputConfig={{
                    name: "description",
                    rows: 4,
                    value: form.description,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    placeholder:
                      "Describe the project scope, main structure, and objectives.",
                  }}
                  inputValueError={errors.description}
                />
              </div>

              <Error error={fetchError} />

              <SubmitButton
                disabled={loading}
                updateForm={"Register Project"}
                updatingForm={"Registering Project..."}
              />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SiteRegistration;
