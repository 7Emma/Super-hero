import { useState } from "react";
import { createHero } from "../services/api";

const useCreateHero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  const submitHero = async (formData) => {
    setIsLoading(true);
    setMessage(null);
    setMessageType("success");

    const result = await createHero(formData);

    if (result.success) {
      setMessage(result.message);
      setMessageType("success");
    } else {
      setMessage(result.message);
      setMessageType("error");
    }

    setIsLoading(false);

    // On efface le message après 5 secondes pour un effet visuel
    setTimeout(() => setMessage(null), 5000);

    return result.success;
  };

  return { isLoading, message, messageType, submitHero };
};

export default useCreateHero;
