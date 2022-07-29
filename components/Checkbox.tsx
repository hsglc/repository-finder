
import { useSelector } from 'react-redux'
import { fetchRepositories } from "../store/repository-actions";
import { repositoryActions } from "../store/repository-slice";
import {useAppDispatch} from '../hooks/types'

interface IProps {
    label: string;
    value: string;
}

const Checkbox = ({ label, value }: IProps) => {
    const dispatch = useAppDispatch();
    const selectedLanguage = useSelector((state: any) => state.repository.selectedLanguage);
    const search = useSelector((state: any) => state.repository.search);
    
    return (
        <div onChange={(e) => {
            const result = (e.target as HTMLInputElement).value;
            dispatch(repositoryActions.setSelectedLanguage(result))
            dispatch(fetchRepositories(result, 1, search))
            
        }} className="flex items-center" >
            <input checked={selectedLanguage === value}  id="default-radio-2" type="radio" value={value} name="default-radio" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
            <label htmlFor="default-radio-2" className={`ml-2 text-sm font-medium transition-all ${value === selectedLanguage ? "text-black" : "text-gray-400"}`}>{label} {value === "Javascript" && "(Default)"}</label>
        </div>
    )
}

export default Checkbox