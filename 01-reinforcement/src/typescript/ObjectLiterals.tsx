interface Person {
  name: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNumber: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    name: "David",
    age: 25,
    address: {
      country: "Spain",
      houseNumber: 7,
    },
  };

  return (
    <>
      <h3>Literal Objects</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};
