import NumberFormat from 'react-number-format';

interface IProps {
    number: number
}

const NumberFormatter = ({ number }: IProps) => {
    return (
        <NumberFormat
            thousandsGroupStyle="thousand"
            decimalSeparator=","
            value={number}
            displayType="text"
            type="text"
            thousandSeparator="."
            allowNegative={false}
        />
    )
}

export default NumberFormatter