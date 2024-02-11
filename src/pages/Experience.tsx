import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useUserContext } from "../context";
import Information from "../components/Information";
import { useNavigate } from "react-router-dom";
type InputsForm = {
  position: string;
  employer: string;
  startNumber: string;
  endNumber: string;
  description: string;
  items: {
    name: string;
  }[];
};
export default function Experience() {
  const context = useUserContext();
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsForm>();
  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    context.setPosition(data.position);
    context.setEmployer(data.employer);
    context.setStartNumber(data.startNumber);
    context.setEndNumber(data.endNumber);
    context.setDescription(data.description);
    navigate("/education");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div className="flex flex-row items-start justify-start gap-20 w-full px-16 pt-10 ">
      <article className="flex flex-col items-start justify-between gap-10">
        <div>
          <p>personal information</p>
          <div className=" w-[798px] h-[1px] bg-black"> </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start justify-between gap-12"
        >
          <div className="flex flex-col items-start gap-1 relative">
            <label className=" text-[14px] font-normal ">position</label>
            <input
              type="text"
              className="w-[798px] h-10 px-3"
              {...register("position", {
                required: "Please enter your position",
              })}
              onChange={(e) => {
                context.setPosition(e.target.value);
              }}
            />
            {errors.position && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.position.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-1 relative">
            <label className=" text-[14px] font-normal ">employer</label>
            <input
              type="text"
              className="w-[798px] h-10 px-3"
              {...register("employer", {
                required: "Please enter your employer",
              })}
              onChange={(e) => {
                context.setEmployer(e.target.value);
              }}
            />
            {errors.employer && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.employer.message}
              </p>
            )}
          </div>
          <section className="flex flex-row items-center  justify-between w-[798px]">
            <div className="flex flex-col items-start justify-start gap-1">
              <label>start day</label>

              <input
                {...register("startNumber", {
                  required: " Please provide information about startNumber",
                })}
                type="date"
                className="w-[360px] h-10 px-3 opacity-50"
                min="1980-04-01"
                onChange={(e) => {
                  context.setStartNumber(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <label>end day</label>
              <input
                {...register("endNumber", {
                  required: " Please provide information about endNumber",
                })}
                type="date"
                className="w-[360px] h-10 px-3 opacity-50"
                min="1980-04-01"
                onChange={(e) => {
                  context.setEndNumber(e.target.value);
                }}
              />
            </div>
          </section>
          <div className="flex flex-col items-start justify-start gap-1">
            <label>Description</label>
            <textarea
              {...register("description", {
                required: "Please provide information about description.",
              })}
              className="w-[798px] h-[150px] px-3 py-3 resize-none"
              onChange={(e) => {
                context.setDescription(e.target.value);
              }}
            />
          </div>
          <div className=" w-[798px] h-[1px] bg-black"> </div>
          <div>
            {fields.map((item, index) => (
              <div key={item.id}>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button
              className="bg-[#62A1EB]  py-5 px-14  text-white text-[14px] rounded-xl"
              type="button"
              onClick={() => append({ name: "" })}
            >
              add more experience
            </button>
          </div>
          <div className=" flex flex-row items-center justify-between w-[789px]">
            <button className="w-40 h-12 bg-[#6B40E3] text-white" type="submit">
              Back
            </button>{" "}
            <button className="w-40 h-12 bg-[#6B40E3] text-white" type="submit">
              Next
            </button>
          </div>
        </form>
      </article>
      <Information />
    </div>
  );
}
