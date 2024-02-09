import {
  useForm,
  SubmitHandler,
  useFieldArray,
  FieldValues,
} from "react-hook-form";
import { useUserContext } from "../context";
import { useNavigate } from "react-router-dom";

type InputsForm = {
  school: string;
  quality: string;
  graduation: string;
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
      items: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit: SubmitHandler<InputsForm> = (data) => {
    navigate("/experience");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start gap-1 relative">
          <label className=" text-[14px] font-normal ">school</label>
          <input
            type="text"
            {...register("school", { required: "Please enter scool name" })}
          />
          {errors.school && (
            <p className=" absolute  bottom-[-20px] text-[12px] font-bold text-red-400">
              {errors.school.message}
            </p>
          )}
        </div>

        <div>
          <input type="list" />
          <input type="date" />
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
      </form>
    </div>
  );
}
