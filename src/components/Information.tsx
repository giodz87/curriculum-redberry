import { useUserContext } from "../context";

export default function Information() {
  const context = useUserContext();
  return (
    <article className="flex flex-col items-start justify-center">
      <section className=" flex flex-col items-start justify-between gap-5">
        {" "}
        <p>{context.name}</p>
        <p>{context.lastName}</p>
        <p>{context.about}</p>
        <p>{context.email}</p>
        <p>{context.number}</p>
      </section>
      {context.personalImg && (
        <img
          className="w-10 h-10"
          src={URL.createObjectURL(context.personalImg)}
          alt=""
        />
      )}
    </article>
  );
}
