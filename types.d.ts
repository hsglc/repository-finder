
export interface IRepository {
  repository: any;
  stars: ReactNode;
  name: ReactNode;
  map(arg0: (repository: IRepository) => JSX.Element): import("react").ReactNode;
    owner: { login: string }; id: number, forks: number; userName: any; description: any; stargazers_count: number; updated_at: string; link: string;
}

export interface IRepositories {
    [key: string]: IRepository;
}