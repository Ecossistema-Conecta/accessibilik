import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../types';

interface AccessibilityMenuProps {
    nodeListUpdated: number;
    display: string;
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
    onLangChange: (langCode: string) => void;
    onInit: () => void;
    onShow: () => void;
    showAcc: boolean;
    hasLanguages: boolean;
}
declare const AccessibilityMenu: FC<AccessibilityMenuProps>;
export default AccessibilityMenu;
