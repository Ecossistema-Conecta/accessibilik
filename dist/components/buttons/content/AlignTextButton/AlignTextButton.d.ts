import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

type Direction = "right" | "center" | "left";
interface AlignTextButtonProps {
    direction: Direction;
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
    translationKey: string;
}
declare const AlignTextButton: FC<AlignTextButtonProps>;
export default AlignTextButton;
