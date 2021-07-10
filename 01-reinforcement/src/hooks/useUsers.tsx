import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
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
      setTotalPages(res.data.total_pages);
      setUsers(res.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

  const nextPage = () => {
    if (pageRef.current < totalPages) {
      pageRef.current++;
      loadUsers();
    } else {
      alert("No more users");
    }
  };

  return {
    users,
    previousPage,
    nextPage,
  };
};
