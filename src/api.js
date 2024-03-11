import { useState, useCallback } from "react";
import { toast } from "react-toast";

export const useData = () => {
  const [loading, setLoading] = useState();

  const getSomeData = useCallback(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.ir/posts")
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        toast.success("Yeay! New data is here.");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong.");
      });
  }, []);

  const showMorning = () => toast("Morning! Have a good day.");

  const showSuccess = () => toast.success("Message sent successfully!");

  const showError = () => toast.error("Oops! Some error occurred.");

  const showInfo = () => toast.info("Did you know about this feature?");

  const showWarn = () => toast.warn("This may be dangerous!");

  const showCustom = () =>
    toast("Hey! This is a custom toast.", {
      backgroundColor: "#323131",
      color: "#ffffff"
    });

  return {
    loading,
    getSomeData,
    showMorning,
    showSuccess,
    showError,
    showInfo,
    showWarn,
    showCustom
  };
};
