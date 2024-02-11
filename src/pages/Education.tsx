import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useUserContext } from "../context";
import { useNavigate } from "react-router-dom";
import Information from "../components/Information";
import { Select, Space } from "antd";
type InputsForm = {
  school: string;
  quality: string;
  graduation: string;
  description: string;
  workDescription: string;
  items: {
    name: string;
  }[];
};
export default function Education() {
  const context = useUserContext();
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsForm>({
    defaultValues: {
      school: "",
      quality: "",
      graduation: "",
      description: "",
      items: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    context.setSchool(data.school);
    navigate("");
  };

  return (
    <div className="flex flex-row items-start justify-start gap-20 w-full px-28 pt-10 ">
      <article className="flex flex-col items-start justify-between gap-10">
        <div>
          <p>personal information</p>
          <div className=" w-[798px] h-[1px] bg-black"> </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start gap-1 relative">
            <label className=" text-[14px] font-normal ">school</label>
            <input
              type="text"
              className=" w-[798px] h-10"
              {...register("school", { required: "Please enter scool name" })}
              onChange={(e) => {
                context.setSchool(e.target.value);
              }}
            />
            {errors.school && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.school.message}
              </p>
            )}
          </div>

          <div className="flex flex-row  items-center justify-between w-[798px]">
            <div className="flex flex-col items-start gap-1 relative">
              <label className=" text-[14px] font-normal ">quality</label>

              <Space wrap>
                <Select
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
                    { value: "associate degree", label: "associate degree" },
                    { value: "student", label: "student" },
                    {
                      value: "College (no degree)",
                      label: "College (no degree)",
                    },
                    { value: "other", label: "other" },
                  ]}
                  onChange={(value: string) => {
                    context.setQuality(value);
                  }}
                />
              </Space>
            </div>
            <div className="flex flex-col items-start gap-1 relative">
              <label className=" text-[14px] font-normal ">
                Graduation Day
              </label>
              <input
                type="date"
                className="w-[360px] h-10 px-3"
                {...register("graduation", {
                  required: "Please enter quality ",
                })}
                onChange={(e) => {
                  context.setGraduation(e.target.value);
                }}
              />
              {errors.graduation && (
                <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                  {errors.graduation.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-1 relative">
            <label>Description</label>
            <textarea
              {...register("workDescription", {
                required: "Please provide information about description.",
              })}
              className="w-[798px] h-[150px] resize-none"
              onChange={(e) => {
                context.setWorkDescription(e.target.value);
              }}
            />
            {errors.workDescription && (
              <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
                {errors.workDescription.message}
              </p>
            )}
          </div>
          <div>
            {fields.map((item, index) => (
              <div key={item.id}>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => append({ name: "" })}>
              Add Item
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
