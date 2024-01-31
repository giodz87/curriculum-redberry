import { useForm, SubmitHandler } from "react-hook-form";

type InputsForm = {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  aboutMe: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsForm>();
  const onSubmit: SubmitHandler<InputsForm> = (data) => console.log(data);

  return (
    <div>
      <form
        className="flex flex-col items-center justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...register("firstName", {
              required: "Please enter first name.",
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Please enter last name." })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div className="flex flex-col items-start justify-between ">
          <label>About Me</label>
          <textarea
            {...register("aboutMe", {
              required: "Please provide information about yourself.",
            })}
          />
          {errors.aboutMe && <p>{errors.aboutMe.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Please enter email address.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message} </p>}
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            {...register("number", { required: "Please enter phone number." })}
          />
          {errors.number && <p>{errors.number.message}</p>}
        </div>

        <button className="w-40 h-12 bg-[#6B40E3] text-white" type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
