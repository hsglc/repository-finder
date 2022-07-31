import { repositoryActions, fetchRepos } from "../store/repository-slice";
import { useAppDispatch } from '../hooks/useStore'
import useStoreSlice from '../hooks/useStoreSlice';

interface IProps {
    label: string;
    value: string;
}

const RadioButton = ({ label, value }: IProps) => {
    const dispatch = useAppDispatch();
    const { selectedLanguage, page, search } = useStoreSlice();

    return (
        <div onChange={(e) => {
            const result = (e.target as HTMLInputElement).value;
            dispatch(repositoryActions.setSelectedLanguage(result))
            dispatch(fetchRepos({ page, selectedLang: result, search }))

        }} className="flex items-center" >
            <input readOnly checked={selectedLanguage === value} id={label} type="radio" value={value} name="default-radio" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 " />
            <label htmlFor={label} className={`ml-2 text-sm font-medium transition-all ${value === selectedLanguage ? "text-black" : "text-gray-400"}`}>{label} {value === "Javascript" && "(Default)"}</label>
        </div>
    )
}

export default RadioButton