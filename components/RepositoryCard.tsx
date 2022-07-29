import { useSelector } from "react-redux"
import { IRepository } from "../types"
import CustomLink from "./CustomLink"

const RepositoryCard = () => {
  const repositories = useSelector((state: IRepository) => state.repository.repositories)
  return (
    <div className="block md:hidden mt-4">
      {repositories?.map((repository: any) => <div key={repository.id} className="border rounded-lg border-gray-400/50 p-2 mb-2 mx-1.5">
        <h1 className="font-bold"> <span className="repCardTitle">ID: </span> {repository.id}</h1>
        <p> <span className="repCardTitle">Owner: </span> {repository.name}</p>
        <p className="truncate..."> <span className="repCardTitle">Description: </span> {repository.description?.substring(0, 100)}</p>
        <p> <span className="repCardTitle">Stars: </span> {repository.stars}</p>
        <p> <span className="repCardTitle">Forks: </span> {repository.forks}</p>
        <p> <span className="repCardTitle">Update Date: </span> {new Date(repository.updated_at).toLocaleDateString()}</p>
        <p> <span className="repCardTitle">View More: </span> <CustomLink href={repository.link} label="Github" /> </p>

      </div>)}
    </div>
  )
}

export default RepositoryCard