import { useState } from "react";

export const Useform = (initialVal) => {
  const [state, setState] = useState(initialVal);
  return [
    state,
    (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    },
  ];
};
