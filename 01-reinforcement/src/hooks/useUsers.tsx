import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await reqResApi.get<ReqResList>("/users", {
        params: {
          page: pageRef.current,
        },
      });
      if (res.data.data.length > 0) {
        setUsers(res.data.data);
        pageRef.current++;
      } else {
        alert("No more users");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return {
    users,
    loadUsers,
  };
};
