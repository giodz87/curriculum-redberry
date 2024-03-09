import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { useUserContext } from "../context";
import { useNavigate } from "react-router-dom";
import Information from "../components/Information";
import { Select, Space } from "antd";
import { useEffect } from "react";
type InputsForm = {
  education: {
    school: string;
    quality: string;
    graduation: string;
    description: string;
    workDescription: string;
  }[];
};
export default function Education() {
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
      education: [
        {
          school: "",
          quality: "",
          graduation: "",
          description: "",
          workDescription: "",
        },
      ],
    },
  });
  const countPage = () => {
    context.setCount(context.count + 1);
  };
  const onSubmit: SubmitHandler<InputsForm> = () => {
    navigate("/information");
    countPage();
  };
  const { fields, append, remove } = useFieldArray<InputsForm>({
    control,
    name: "education",
  });

  const watchedFields = watch("education");

  useEffect(() => {
    context.setEducation(watchedFields);
  }, [watchedFields]);

  return (
    <div className="flex flex-row items-start justify-start gap-20 w-full px-16   h-[100%]">
      <article className="flex flex-col items-start justify-between gap-10">
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
          {fields.map((item, index) => {
            return (
              <section
                key={item.id}
                className=" flex flex-col items-start justify-between gap-10"
              >
                <div className="flex flex-col items-start gap-1 relative">
                  <label className=" text-[14px] font-normal ">school</label>
                  <input
                    type="text"
                    className=" w-[798px] h-10 px-3"
                    {...register(`education.${index}.school`, {
                      required: "Please enter scool name",
                    })}
                  />
                  {errors.education?.[index]?.school && (
                    <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                      {errors.education?.[index]?.school?.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-row  items-center justify-between w-[798px]">
                  <div className="flex flex-col items-start gap-1 relative">
                    <label className=" text-[14px] font-normal ">quality</label>

                    <Space wrap>
                      <Controller
                        name={`education.${index}.quality`}
                        control={control}
                        rules={{ required: "Please enter your quality" }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="Choose a degree"
                            style={{ width: 360, height: 40 }}
                            options={[
                              {
                                value: "High school diploma",
                                label: "High school diploma",
                              },
                              {
                                value: "General education diploma",
                                label: "General education diploma",
                              },
                              { value: "Bachelor", label: "Bachelor" },
                              { value: "master", label: "master" },
                              { value: "doctor", label: "doctor" },
                              {
                                value: "associate degree",
                                label: "associate degree",
                              },
                              { value: "student", label: "student" },
                              {
                                value: "College (no degree)",
                                label: "College (no degree)",
                              },
                              { value: "other", label: "other" },
                            ]}
                          />
                        )}
                      />
                    </Space>
                  </div>
                  <div className="flex flex-col items-start gap-1 relative">
                    <label className=" text-[14px] font-normal ">
                      Graduation Day
                    </label>
                    <input
                      type="date"
                      className="w-[360px] h-10 px-3  opacity-50"
                      {...register(`education.${index}.graduation`, {
                        required: "Please enter graduation day ",
                      })}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-1 relative">
                  <label>Description</label>
                  <textarea
                    {...register(`education.${index}.workDescription`, {
                      required: "Please provide information about description.",
                    })}
                    className="w-[798px] h-[150px] px-3 py-3 resize-none"
                  />
                  {errors.education?.[index]?.workDescription && (
                    <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                      {errors.education?.[index]?.workDescription?.message}
                    </p>
                  )}
                </div>

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
          <div>
            <button
              className="bg-[#62A1EB]  py-5 px-14  text-white text-[14px] rounded-xl cursor-pointer"
              type="button"
              onClick={() =>
                append({
                  school: "",
                  quality: "",
                  graduation: "",
                  description: "",
                  workDescription: "",
                })
              }
            >
              add more experience
            </button>
          </div>
          <div className=" flex flex-row items-center justify-between w-[789px]">
            <button
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
