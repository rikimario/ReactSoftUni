import { useState } from "react";

const useForm = (initValue, onSubmitHandler) => {
  const [formValue, setFormValue] = useState([initValue]);

  const changeHandler = (e) => {
    setFormValue((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const todoHandler = (e) => {
    e.preventDefault();

    if (onSubmitHandler) {
      onSubmitHandler(formValue);
    }
  };

  return {
    formValue,
    changeHandler,
    todoHandler,
  };
};

export default useForm;
