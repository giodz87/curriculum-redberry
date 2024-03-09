import { useUserContext } from "../context";
import { FaPhoneAlt } from "react-icons/fa";
export default function Information() {
  const context = useUserContext();
  return (
    <article className="flex flex-col items-start justify-center ">
      <section className=" flex flex-row items-start justify-between w-full ">
        <div className=" flex flex-col items-start justify-between gap-3">
          <div className="flex flex-row items-center justify-center gap-2 text-[32px] font-bold text-red-600">
            {" "}
            <p>{context.name}</p>
            <p>{context.lastName}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            {context.email && (
              <div className="flex flex-row items-center justify-center gap-1">
                {" "}
                <p className=" opacity-50 ">@</p> <p>{context.email}</p>
              </div>
            )}
            {context.number && (
              <div className="flex flex-row items-center justify-center gap-1">
                {" "}
                <FaPhoneAlt className=" opacity-50" /> <p>{context.number}</p>{" "}
              </div>
            )}
          </div>

          <div className=" text-[14px] w-[370px] font-normal">
            {context.about && (
              <div className=" text-[14px] w-[370px] font-normal">
                <strong className=" text-red-600 text-[18px]">About Me</strong>
                <p className=" text-[16px] font-normal w-[600px]">
                  {context.about}
                </p>
              </div>
            )}
          </div>
        </div>
        {context.personalImg && (
          <img
            className="w-[250px] h-[250px] rounded-full"
            src={URL.createObjectURL(context.personalImg)}
            alt=""
          />
        )}
      </section>
      {context.name && (
        <div className=" w-[600px] h-[1px] bg-black my-6 opacity-50"> </div>
      )}

      <section className=" flex flex-col items-start justify-between gap-3">
        {context.experience?.map((exp, index) => (
          <div key={index}>
            {exp && (
              <div>
                <strong className=" text-red-600 text-[18px]">
                  experience
                </strong>

                <div className=" text-[14px] font-normal">
                  <p>{exp.position}</p>

                  <p>{exp.employer}</p>
                  <div className=" flex flex-row items-center gap-2 opacity-50">
                    <p className=" py-2  opacity-50 text-[12px]">
                      {exp.startNumber}
                    </p>
                    <p className=" py-2  opacity-50 text-[12px]">
                      {exp.endNumber}
                    </p>
                  </div>
                </div>
                <p className=" text-[16px] font-normal w-[600px]">
                  {exp.description}
                </p>

                <div className=" w-[600px] h-[1px] bg-black my-6 opacity-50">
                  {" "}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        {context.education.map((item, index) => (
          <div key={index}>
            {item && (
              <div>
                <strong className=" text-red-600 text-[18px]">education</strong>

                <div className="flex flex-row items-center gap-2">
                  <p>{item.school}</p>
                  <p>{item.quality}</p>
                </div>
                <p className="w-[360px] h-10  opacity-50 text-[12px]">
                  {item.graduation}
                </p>
                <p className=" text-[16px] font-normal w-[600px]">
                  {item.workDescription}
                </p>

                <div className=" w-[600px] h-[1px] bg-black my-6 opacity-50">
                  {" "}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </article>
  );
}
