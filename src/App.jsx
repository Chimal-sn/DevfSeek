import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import { useForm } from "react-hook-form";

export default function App() {

  const { register, handleSubmit, reset } = useForm();

  const [messages, setMessages] = useState([]);

  const onSubmit = (data) => {

    setMessages([...messages, { text: data.message, sender: "user" }]);
    reset();
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white justify-end">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === "user"
              ? "bg-blue-600 self-end"
              : "bg-gray-700 self-start"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex items-center bg-gray-800">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none"
          {...register("message", { required: true })}
        />
        <button
          className="ml-2 p-2 bg-blue-600 rounded-lg"

        >
          <SendHorizontal size={20} />
        </button>
      </form>
    </div >
  );
}
