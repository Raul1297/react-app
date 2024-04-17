import { createContext, useState } from "react";

export const UserProfileContext = createContext(null);

export default function UserProfileContextProvider(props) {
  const [user, setUser] = useState("");

  return (
    <UserProfileContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserProfileContext.Provider>
  );
}
