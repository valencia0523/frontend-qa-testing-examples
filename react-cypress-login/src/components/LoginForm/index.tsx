import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name", {
        style: {
          color: "#dc2626",
        },
      });
      return;
    }

    toast.success(`Hello, ${name}!`);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 min-w-screen">
      <div className="text-3xl font-bold">Form Test</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="border-1"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
