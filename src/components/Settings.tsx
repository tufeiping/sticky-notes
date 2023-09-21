import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import "../less/settings.less";
import { setSettingDialogFlag } from "../store/global";

const Settings = () => {

    const dispatch = useAppDispatch();
    const globalState = useAppSelector((state) => state.global);
    const showSettingDialogFlag = useAppSelector((state) => state.global.showSettingDialogFlag);

    const handleSettingClick = useCallback(() => {
        dispatch(setSettingDialogFlag(!globalState.showSettingDialogFlag));
    }, [globalState.showSettingDialogFlag]);

    return (
        <dialog className={`settings-wrapper ${showSettingDialogFlag ? "" : "hidden"}`}>
            <div className="settings-container">
                <div className="settings-header">
                    <span className="settings-title">Settings</span><span className="settings-close-btn" onClick={handleSettingClick}>X</span>
                </div>
                <div className="settings-content">
                    <div className="settings-item">
                        <span className="settings-item-title">Service URL:</span>
                        <input className="settings-item-input" type="text" />
                    </div>
                    <div className="settings-item">
                        <span className="settings-item-title">Username:</span>
                        <input className="settings-item-input" type="text" />
                    </div>
                    <div className="settings-item">
                        <span className="settings-item-title">Password:</span>
                        <input className="settings-item-input" type="password" />
                    </div>
                    <div className="settings-item">
                        <button className="settings-item-btn">Save</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Settings;