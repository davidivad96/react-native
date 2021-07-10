import { useForm } from "../hooks/useForm";

export const Forms = () => {
  const {
    state: { email, password },
    onChange,
  } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />
    </>
  );
};
