import { RotatingLines } from 'react-loader-spinner'

interface IProps {
    message: string

}

const Spinner = ({ message }: IProps) => {
    return (
        <div className='mt-12 flex flex-col items-center justify-center'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"

            />
            <p className='text-blue-600 font-semibold text-2xl animate-bounce mt-3'>{message}</p>
        </div>
    )
}

export default Spinner