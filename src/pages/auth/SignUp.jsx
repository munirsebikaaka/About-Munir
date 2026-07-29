import { useState } from "react";
import Input from "../../ui/Input";

const inputFieldNames = {
  name: "Company name",
  headquarters: "Company headquarters",
  description: "Company description",
  ownerFirstName: "Owner first name",
  ownerLastName: "Owner last name",
  email: "Email",
  Password: "Password",
  confirmPassword: "Confirm Password",
};

const SignUp = () => {
  const [companyAndOwnerDetails, setCompanyAndOwnerDetails] = useState({
    name: "",
    headquarters: "",
    description: "",
    ownerFirstName: "",
    ownerLastName: "",
    email: "",
    role: "owner",
    password: "",
    confirmPassword: "",
  });

  const [inputFieldErrors, setInputFieldErrors] = useState({});

  const onChange = (e) => {
    const { value, name } = e.target;
    setCompanyAndOwnerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleErrorsOnBlur = (e) => {
    return () => {
      const { value, name } = e.target;
      if (!value.trim()) {
        setInputFieldErrors((prev) => ({
          ...prev,
          [name]: `${inputFieldNames[name]} is required!`,
        }));
      }
    };
  };

  return (
    <div>
      SIGN UP
      <form>
        <h2>ABOUT COMPANY</h2>
        <div>
          <div>
            <Input
              label={"Company name"}
              inputConfig={{
                name: "name",
                value: companyAndOwnerDetails.name,
                onChange: onChange,
                placeholder: "Company name",
              }}
            />
            <Input
              label={"Headquarters"}
              inputConfig={{
                name: "headquarter",
                value: companyAndOwnerDetails.headquarters,
                onChange: onChange,
                placeholder: "Company Headquarters",
              }}
            />
          </div>
          <Input
            label={"description"}
            inputConfig={{
              rows: "6",
              name: "description",
              value: companyAndOwnerDetails.description,
              onChange: onChange,
              placeholder: "description",
            }}
          />
        </div>
        <h2>Owner details</h2>
        <div>
          <div>
            <Input
              label={"First name"}
              inputConfig={{
                name: "ownerFirstName",
                value: companyAndOwnerDetails.ownerFirstName,
                onChange: onChange,
                onBlur: handleErrorsOnBlur,
                placeholder: "Owner first name",
              }}
              inputValueError={inputFieldErrors?.ownerFirstName}
            />

            <Input
              label={"Last name"}
              inputConfig={{
                name: "ownerLastName",
                value: companyAndOwnerDetails.ownerLastName,
                onChange: onChange,
                placeholder: "Owner last name",
              }}
            />
          </div>
          <div>
            <Input
              label={"Email"}
              inputConfig={{
                name: "email",
                value: companyAndOwnerDetails.email,
                onChange: onChange,
                placeholder: "Email",
              }}
            />
            <Input
              label={"Role"}
              inputConfig={{
                name: "role",
                value: companyAndOwnerDetails.role,
                onChange: onChange,
              }}
            />
          </div>
          <Input
            label={"Password"}
            inputConfig={{
              name: "password",
              value: companyAndOwnerDetails.password,
              onChange: onChange,
              placeholder: "Password",
            }}
          />
          <Input
            label={"Confirm password"}
            inputConfig={{
              name: "confirmPassword",
              value: companyAndOwnerDetails.confirmPassword,
              onChange: onChange,
              placeholder: "confirm password",
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default SignUp;
