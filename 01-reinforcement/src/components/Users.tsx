import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces/reqRes";

export const Users = () => {
  const { users, previousPage, nextPage } = useUsers();

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
      <button className="btn btn-primary me-2" onClick={previousPage}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={nextPage}>
        Next
      </button>
    </>
  );
};
