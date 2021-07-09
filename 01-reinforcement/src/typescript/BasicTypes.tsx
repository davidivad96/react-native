export const BasicTypes = () => {
  const name: string = "David";
  const age: number = 25;
  const isActive: boolean = false;
  const powers: string[] = ["Velocity", "Fly", "Breath under water"];

  return (
    <>
      <h3>Basic Types</h3>
      {name}, {age}, {isActive ? "active" : "no active"}
      <br />
      <span>{powers.join(", ")}</span>
    </>
  );
};
