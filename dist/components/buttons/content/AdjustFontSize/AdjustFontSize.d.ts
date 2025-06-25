import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface AdjustFontSizeProps {
    nodeListUpdated: number;
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const AdjustFontSize: FC<AdjustFontSizeProps>;
export default AdjustFontSize;
