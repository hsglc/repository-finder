import { IRepository } from "../../types";
import CustomLink from "../CustomLink";

interface IProps {
  repository: IRepository;
  key: number;
}

const Trow = ({ repository }: IProps) => {
  return (
    <tr className="text-center">
      <td>{repository.id}</td>
      <td>{repository.name}</td>
      <td className="truncate...">{repository.description?.substring(0, 100)}</td>
      <td>{repository.stars}</td>
      <td>{repository.forks}</td>
      <td>{new Date(repository.updated_at).toLocaleDateString()}</td>
      <td>
        <CustomLink label="Github" href={repository.link} />
      </td>
    </tr>
  );
};

export default Trow;
