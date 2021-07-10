import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

export const Users = () => {
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

  const renderItem = ({ id, avatar, first_name, last_name, email }: User) => (
    <tr key={id}>
      <td>
        <img
          src={avatar}
          alt={first_name}
          style={{ width: 40, borderRadius: 20 }}
        />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={loadUsers}>
        Next
      </button>
    </>
  );
};
