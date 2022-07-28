/** @format */
import { useEffect } from "react";
import { IRepository } from "../../types";
import { useSelector } from "react-redux";
import Thead from "./Thead";
import Trow from "./Trow";
import { fetchRepositories } from "../../store/repository-actions";
import {useAppDispatch} from '../../hooks/types'


const RepositoryTable = () => {
  const dispatchRepositories = useAppDispatch();
  const selectedLanguage = useSelector(
    (state: any) => state.repository.selectedLanguage
  );
  const selectedPage = useSelector((state: any) => state.repository.page);
  const repositories = useSelector((state: any) => state.repository.repositories);

  useEffect(() => {
    dispatchRepositories(fetchRepositories(selectedLanguage, selectedPage));
  }, [selectedLanguage, selectedPage]);
  return (
    <table className="hidden md:inline-block my-8 shadow-lg border-separate border-spacing-0  border border-gray-400/50 rounded-lg p-4">
      <Thead />
      <tbody>
        {repositories?.map((repository: IRepository) => (
          <Trow key={repository.id} repository={repository} />
        ))}
      </tbody>
    </table>
  );
};

export default RepositoryTable;
