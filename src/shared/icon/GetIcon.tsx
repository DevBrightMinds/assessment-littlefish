export const GetIcon: React.FC<{ Name: string }> = ({ Name }): JSX.Element => {
    return <i className={`bi ${Name} `} />
}