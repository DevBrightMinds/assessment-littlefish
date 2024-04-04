export const AppBackDrop: React.FC<{ Status: boolean }> = ({ Status }): JSX.Element => {
    return <div className={!Status ? "app-backdrop" : "app-backdrop backdrop-active"}></div>
}