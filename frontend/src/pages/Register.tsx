import { useForm } from "react-hook-form";
import { Button } from "../components/ui";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, watch, handleSubmit } = useForm<RegisterFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-5">
      <h2 className="header">Create an account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-label flex-1">
          First Name
          <input
            type="text"
            className="text-input"
            {...register("firstName", { required: "This field is required" })}
          />
        </label>
        <label className="text-label flex-1">
          Last Name
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", { required: "This field is required" })}
          />
        </label>
      </div>
      <label className="text-label flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
      </label>
      <label className="text-label flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
      </label>
      <label className="text-label flex-1">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
      </label>
      <span>
        {" "}
        <Button
          text="Create Account"
          type="submit"
          size="large"
          className=" bg-primary text-light"
          onClick={onSubmit}
        />
      </span>
    </form>
  );
};

export default Register;
