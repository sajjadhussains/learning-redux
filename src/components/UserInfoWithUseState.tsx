import React, { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: "", hobbies: [] });
  console.log(user);

  return (
    <div>
      <form action="">
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          placeholder="Enter yourname"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          type="text"
          placeholder="Enter age"
        />
        <input
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
          }
          type="text"
          placeholder="Enter your hobbies"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserInfoWithUseState;
