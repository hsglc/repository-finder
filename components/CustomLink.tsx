import Link from 'next/link'
interface IProps {
    label: string;
    href: string;
}

const CustomLink = ({ href, label }: IProps) => {
    return (
        <Link href={href} passHref>
            <a className="hover:underline hover:text-blue-400 transition-all " target="_blank" rel="noopener noreferrer">{label}</a>
        </Link>
    )
}

export default CustomLink