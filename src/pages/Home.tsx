import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};
export default function Home() {
  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}
