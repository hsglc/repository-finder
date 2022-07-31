import { IRepository } from "../../types";
import useStoreSlice from "../../hooks/useStoreSlice";
import Thead from "./Thead";
import Trow from "./Trow";


const RepositoryTable = () => {
  const { repositories } = useStoreSlice()

  return (<>
    <table className="hidden md:inline-block my-1 md:my-4 shadow-lg border-separate border-spacing-0  border border-gray-400/50 rounded-lg p-4">
      <Thead />
      <tbody>
        {repositories?.map((repository: IRepository) => (
          <Trow key={repository.id} repository={repository} />
        ))}
      </tbody>
    </table>
  </>
  );
};

export default RepositoryTable;
