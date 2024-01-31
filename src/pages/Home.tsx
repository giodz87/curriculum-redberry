import { useForm, SubmitHandler } from "react-hook-form";
import { useUserContext } from "../context";
import Information from "../components/information";

type InputsForm = {
  firstName: string;
  lastName: string;
  aboutMe: string;
  email: string;
  number: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsForm>();
  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    context.setName(data.firstName);
    context.setLastName(data.lastName);
    context.setAbout(data.aboutMe);
    context.setEmail(data.email);
    context.setNumber(data.number);
  };
  const context = useUserContext();
  return (
    <div className="flex flex-row items-start justify-start gap-20 w-full px-28 pt-10 ">
      <article className="flex flex-col items-start justify-between gap-10">
        <div>
          <p>personal information</p>
          <div className=" w-[798px] h-[1px] bg-black"> </div>
        </div>
        <form
          className="flex flex-col items-start justify-between gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="flex flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-start gap-1 relative">
              <label className=" text-[14px] font-normal ">First Name</label>
              <input
                type="text"
                {...register("firstName", {
                  required: "Please enter first name.",
                })}
                className="w-[380px] h-10"
                onChange={(e) => context.setName(e.target.value)}
              />
              {errors.firstName && (
                <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-1 relative">
              <label className=" text-[14px] font-normal ">Last Name</label>
              <input
                type="text"
                {...register("lastName", {
                  required: "Please enter last name.",
                })}
                className="w-[380px] h-10"
                onChange={(e) => context.setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className=" absolute  bottom-[-20px]  text-[12px] font-bold text-red-400">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </section>
          <div className="flex flex-row items-center justify-between gap-5">
            <label className=" text-[14px] font-normal ">
              personal picture
            </label>

            <input
              type="file"
              onChange={(e) => {
                const selectedFile = e.target.files && e.target.files[0];

                if (selectedFile) {
                  context.setPersonalImg(selectedFile);
                }
              }}
            />
          </div>
          <div className="flex flex-col items-start justify-between relative gap-1 ">
            <label>About Me</label>
            <textarea
              {...register("aboutMe", {
                required: "Please provide information about yourself.",
              })}
              className="w-[798px] h-[150px]"
              onChange={(e) => context.setAbout(e.target.value)}
            />
            {errors.aboutMe && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.aboutMe.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-1 relative">
            <label className=" text-[14px] font-normal ">Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Please enter email address.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-[380px] h-10"
              onChange={(e) => context.setEmail(e.target.value)}
            />
            {errors.email && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.email.message}{" "}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start gap-1 relative">
            <label className=" text-[14px] font-normal ">Phone Number</label>
            <input
              type="text"
              {...register("number", {
                required: "Please enter phone number.",
              })}
              className="w-[380px] h-10"
              onChange={(e) => context.setNumber(e.target.value)}
            />
            {errors.number && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.number.message}
              </p>
            )}
          </div>

          <button className="w-40 h-12 bg-[#6B40E3] text-white" type="submit">
            Next
          </button>
        </form>
      </article>

      <Information />
    </div>
  );
}
