import { useForm } from "react-hook-form";

export default function Apps() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="block bg-gray-50"
          {...register("firstName", { required: true })}
        //   aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}

        <input className="block bg-gray-50"
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail.message}</p>}

        <input className="block" type="submit" />
      </form>
    </div>
  );
}
