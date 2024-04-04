import { GetIcon } from "../icon/GetIcon";

export const AppButton: React.FC<{ handleBtnClick: () => void, ButtonName: string, IconName: string }> = ({ handleBtnClick, ButtonName, IconName }) => {
    return <div className="app-btn" onClick={handleBtnClick}>
        <span>{ButtonName} &nbsp;<GetIcon Name={IconName} /></span>
    </div>
}