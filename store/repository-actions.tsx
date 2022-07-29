import { IRepository } from '../types'
import { repositoryActions } from './repository-slice'

export const fetchRepositories = (lang: string = "Javascript", page: number = 1, desc: string="") => async (dispatch: (arg0: { payload: any; type: string }) => void) => {

    
    const SearchUrl = `https://api.github.com/search/repositories?q=language:${lang}+${desc}in:description&sort=stars&order=desc&page=${page}&per_page=20`

    const response = await fetch(SearchUrl)
    
    const repositories = await response.json()
    
    const extractedRepos = repositories?.items?.map((item: IRepository) => {
        return {
            id: item.id,
            name: item.owner.login,
            description: item.description,
            stars: item.stargazers_count,
            forks: item.forks,
            updated_at : item.updated_at,
            link: item.html_url
        }
    })
    dispatch(repositoryActions.setRepoNumber(repositories?.total_count))
    dispatch(repositoryActions.setRepositories(extractedRepos))
    dispatch(repositoryActions.setError(repositories?.message))
}