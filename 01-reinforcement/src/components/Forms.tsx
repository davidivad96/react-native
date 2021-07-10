import { useState } from "react";

export const Forms = () => {
  const [form, setForm] = useState({
    email: "test@test.com",
    password: "123456",
  });

  const onChange = (value: string, field: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Email"
        value={form.email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        value={form.password}
        onChange={({ target }) => onChange(target.value, "password")}
      />
    </>
  );
};
