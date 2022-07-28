
const HEADS = ["ID", "Username", "Description", "Stars", "Forks", "Update Date", "View More"];

const Thead = () => {

  return (
    <thead>
      <tr>
        {HEADS.map((head) => (
          <th
            className={`text-blue-700 font-bold ${head === "Description" ? "w-[600px]" : "w-[120px]"}`}
            key={head}>
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
