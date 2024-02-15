import { type FC, type ReactNode } from "react";

interface infoBoxProps{
    mode: 'hint' | 'warning', 
    children: ReactNode
}

const InfoBox: FC<infoBoxProps> = ({mode, children}) => {
    // if the return is a hint
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    // default return is warning
    return (
        <aside className="infobox infobox-warning warning--high">
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox;