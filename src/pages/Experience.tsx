import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useUserContext } from "../context";
import Information from "../components/Information";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export type InputsForm = {
  experience: {
    position: string;
    employer: string;
    startNumber: string;
    endNumber: string;
    description: string;
  }[];
};
export default function Experience() {
  const context = useUserContext();
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsForm>({
    defaultValues: {
      experience: [
        {
          position: "",
          employer: "",
          startNumber: "",
          endNumber: "",
          description: "",
        },
      ],
    },
  });
  const countPage = () => {
    context.setCount(context.count + 1);
  };
  const onSubmit: SubmitHandler<InputsForm> = () => {
    navigate("/education");
    countPage();
  };

  const { fields, append, remove } = useFieldArray<InputsForm>({
    control,
    name: "experience",
  });

  const watchedFields = watch("experience");

  useEffect(() => {
    context.setExperience(watchedFields);
  }, [watchedFields]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-row items-start justify-start gap-20 w-full px-16 pt-10 ">
      <article className="flex flex-col items-start justify-between ">
        <div>
          <div className=" flex  flex-row items-center  justify-between">
            <p className=" pb-3 text-[24px] font-bold">personal information</p>
            <p>{context.count}/3</p>
          </div>
          <div className=" w-[798px] h-[1px] bg-black"> </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start justify-between gap-12"
        >
          <div>
            {fields.map((item, index) => {
              return (
                <section
                  className=" flex flex-col items-start justify-between gap-10"
                  key={item.id}
                >
                  <div className="flex flex-col items-start gap-1 mt-10 relative">
                    <label className=" text-[14px] font-normal  ">
                      position
                    </label>
                    <input
                      type="text"
                      className="w-[798px] h-10 px-3"
                      {...register(`experience.${index}.position`, {
                        required: "Please enter your position",
                      })}
                      defaultValue={item.position}
                    />
                    {errors.experience?.[index]?.position && (
                      <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                        {errors.experience?.[index]?.position?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-1 relative">
                    <label className=" text-[14px] font-normal ">
                      employer
                    </label>
                    <input
                      type="text"
                      className="w-[798px] h-10 px-3"
                      {...register(`experience.${index}.employer`, {
                        required: "Please enter your employer",
                      })}
                    />
                    {errors.experience?.[index]?.employer && (
                      <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                        {errors.experience?.[index]?.employer?.message}
                      </p>
                    )}
                  </div>
                  <section className="flex flex-row items-center  justify-between w-[798px]">
                    <div className="flex flex-col items-start justify-start gap-1">
                      <label>start day</label>

                      <input
                        {...register(`experience.${index}.startNumber`, {
                          required:
                            " Please provide information about startNumber",
                        })}
                        type="date"
                        className="w-[360px] h-10 px-3 opacity-50"
                        min="1980-04-01"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                      <label>end day</label>
                      <input
                        {...register(`experience.${index}.endNumber`, {
                          required:
                            " Please provide information about endNumber",
                        })}
                        type="date"
                        className="w-[360px] h-10 px-3 opacity-50"
                        min="1980-04-01"
                      />
                    </div>
                  </section>
                  <div className="flex flex-col items-start justify-start gap-1">
                    <label>Description</label>
                    <textarea
                      {...register(`experience.${index}.description`, {
                        required:
                          "Please provide information about description.",
                      })}
                      className="w-[798px] h-[150px] px-3 py-3 resize-none"
                    />
                  </div>
                  <div className=" w-[798px] h-[1px] bg-black"> </div>
                  {index !== 0 && (
                    <button
                      className="w-40 h-12 bg-[#62A1EB]  text-white rounded-xl cursor-pointer"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  )}
                </section>
              );
            })}
            <button
              className="bg-[#62A1EB]  py-5 px-14  text-white text-[14px] rounded-xl cursor-pointer mt-8"
              type="button"
              onClick={() =>
                append({
                  position: "",
                  employer: "",
                  description: "",
                  startNumber: "",
                  endNumber: "",
                })
              }
            >
              add more experience
            </button>
          </div>
          <div className=" flex flex-row items-center justify-between w-[789px] ">
            <button
              onClick={() => {
                goBack();
              }}
              className="w-40 h-12 bg-[#6B40E3] text-white rounded-xl cursor-pointer mb-10"
              type="submit"
            >
              Back
            </button>{" "}
            <button
              className="w-40 h-12 bg-[#6B40E3] text-white rounded-xl cursor-pointer mb-10"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </article>
      <Information />
    </div>
  );
}
