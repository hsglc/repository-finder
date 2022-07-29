import { IRepository } from "../../types";
import { useSelector } from "react-redux";
import Thead from "./Thead";
import Trow from "./Trow";


const RepositoryTable = () => {
  const repositories = useSelector((state: any) => state.repository.repositories);
  const error = useSelector((state: any) => state.repository.error);

  return (<>
    {!error ? <table className="hidden md:inline-block my-8 shadow-lg border-separate border-spacing-0  border border-gray-400/50 rounded-lg p-4">
      <Thead />
      <tbody>
        {repositories?.map((repository: IRepository) => (
          <Trow key={repository.id} repository={repository} />
        ))}
      </tbody>
    </table> : <div className="text-center mt-4 text-red-400 font-bold">{error}</div>}
  </>
  );
};

export default RepositoryTable;
