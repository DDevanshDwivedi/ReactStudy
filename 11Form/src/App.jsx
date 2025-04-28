import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched", // or "onChange"
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input className={errors.firstName ? "input-error" : ""}
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters allowed",
              },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="midName">Middle Name: </label>
          <input className={errors.midName ? "input-error" : ""}
            id="midName"
            {...register("midName", {
              pattern: {
                value: /^[A-Za-z]*$/i,
                message: "Only letters allowed",
              },
            })}
          />
          {errors.midName && (
            <p className="error-msg">{errors.midName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">
            Last Name:{" "}
          </label>
          <input className={errors.lastName ? "input-error" : ""}
            id="lastName"
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Must enter correct name",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-msg">{errors.lastName.message}</p>
          )}
        </div>

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
