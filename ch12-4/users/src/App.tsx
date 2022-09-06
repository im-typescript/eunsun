import React, { memo, useEffect, useState } from "react";
import "./App.css";
import { IUser } from "./IUser";
import { IUserWithImg } from "./IUserWithImg";
import { getDataPromise } from "./getDataPromise";
import { CardComponent } from "./Card";
import { v4 as uuidv4 } from "uuid";
const App: React.FC = memo(() => {
  const limit = 1;
  const [skip, setSkip] = useState<number>(0);
  const [users, setUsers] = useState<IUserWithImg[]>([]);
  const random = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const onClick = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit);
      setUsers([
        ...users,
        ...receivedUsers.map((e) => ({
          ...e,
          img: `https://source.unsplash.com/random/500x${random(300) + 500}`,
        })),
      ]);
    })(skip, limit);
  };
  useEffect(onClick, []);

  getDataPromise((users: IUser[]) => console.log("users", users))(0, 1);
  return (
    <div className="App">
      {users?.map((user: IUserWithImg) => (
        <CardComponent
          user={user}
          click={onClick}
          key={uuidv4()}
        ></CardComponent>
      ))}
    </div>
  );
});

export default App;
