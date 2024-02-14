// type CourseGoalProps = {
//     title: string, 
//     description: string
// }

import { type FC, type PropsWithChildren } from "react"; //, type ReactNode removed

// interface CourseGoalProps {
    // title: string, 
    // description: string,
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
    title: string, 
    description: string, 
    id: number,
    onDelete: (id: number) => void;
}>

const CourseGoal: FC<CourseGoalProps> = ({title, description, id, onDelete, children}: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

export default CourseGoal;