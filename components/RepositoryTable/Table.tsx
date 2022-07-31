import { IRepository } from "../../types";
import useStoreSlice from "../../hooks/useStoreSlice";
import Thead from "./Thead";
import Trow from "./Trow";


const RepositoryTable = () => {
  const { repositories } = useStoreSlice()

  return (<>
    <table className="bg-blue-500/10  hidden md:inline-block my-1 md:my-4 shadow-lg border-collapse rounded-lg py-4">
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
