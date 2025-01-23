import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api/apiClient";
import { Button } from "../components/ui";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { isLoggedIn, showToast } = useAppContext();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      // Show toast message
      showToast({ message: "Sign in Successful", type: "SUCCESS" });
      //   navigate to the home page
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>
      <label className="text-label flex-1">
        Email
        <input
          type="email"
          className="text-input"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-muted text-red-500">
            {errors.email.message}
          </span>
        )}
      </label>

      {/* Password */}
      <label className="text-label flex-1">
        Password
        <input
          type="password"
          className="text-input"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="text-muted text-red-500">
            {errors.password.message}
          </span>
        )}
      </label>

      {/* Submit button */}
      <span>
        {" "}
        <Button
          text="Sign In"
          type="submit"
          size="large"
          className=" bg-primary text-light"
          onClick={onSubmit}
        />
      </span>
    </form>
  );
};

export default SignIn;
