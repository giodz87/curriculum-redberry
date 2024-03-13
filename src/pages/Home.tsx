import { useForm, SubmitHandler } from "react-hook-form";
import { useUserContext } from "../context";
import Information from "../components/Information";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
type InputsForm = {
  firstName: string;
  lastName: string;
  aboutMe: string;
  email: string;
  number: string;
};

export default function Home() {
  const context = useUserContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsForm>();
  const countPage = () => {
    context.setCount(context.count + 1);
  };

  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    context.setName(data.firstName);
    context.setLastName(data.lastName);
    context.setAbout(data.aboutMe);
    context.setEmail(data.email);
    context.setNumber(data.number);

    navigate("/experience");
    countPage();
  };

  return (
    <div className="flex flex-row items-start justify-start gap-20 w-full  px-16 ">
      <article className="flex flex-col items-start justify-between gap-10">
        <div>
          <div className=" flex  flex-row items-center  justify-between">
            <p className=" pb-3 text-[24px] font-bold">personal information</p>
            <p>{context.count}/3</p>
          </div>
          <div className=" w-[798px] h-[1px] bg-black "> </div>
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
                className="w-[380px] h-10 px-3"
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
                className="w-[380px] h-10 px-3"
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
              className="text-[12px]"
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
              className="w-[798px] h-[150px] resize-none px-3 py-3"
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
              className="w-[380px] h-10 px-3"
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
            <InputMask
              mask="999 999 9999"
              placeholder="123 456 789"
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              {...register("number", {
                required: "Please enter phone number.",
              })}
              className="w-[380px] h-10 px-3"
              value={context.number}
              onChange={(e) => context.setNumber(e.target.value)}
            />
            {errors.number && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.number.message}
              </p>
            )}
          </div>

          <button
            className="w-40 h-12 bg-[#6B40E3] text-white rounded-xl cursor-pointer mb-10"
            type="submit"
          >
            Next
          </button>
        </form>
      </article>

      <Information />
    </div>
  );
}
