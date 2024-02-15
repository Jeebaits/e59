import { type FC, type ReactNode } from "react";

// interface infoBoxProps{
    // mode: 'hint' | 'warning',
    // severity?: 'low' | 'medium' | 'high', // ? allows optional or undefined
    // children: ReactNode
// }

interface HintBoxProps{
    mode: 'hint',
    children: ReactNode
}

interface WarningBoxProps{
    mode: 'warning',
    severity: 'low' | 'medium' | 'high',
    children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
    // destructure props
    const {children, mode} = props;
    // if the return is a hint
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    // desctructure props
    const {severity} = props;
    // default return is warning
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox;