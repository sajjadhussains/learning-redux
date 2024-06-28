import { useReducer } from "react";

type Taction = {
  type: string;
  payload: string;
};
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};
const reducer = (currentState: typeof initialState, action: Taction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbie":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return initialState;
  }
};
const UserInfoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          placeholder="Enter yourname"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="text"
          placeholder="Enter age"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobbie", payload: e.target.value })
          }
          type="text"
          placeholder="Enter your hobbies"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserInfoWithReducer;
