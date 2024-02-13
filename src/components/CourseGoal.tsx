// type CourseGoalProps = {
//     title: string, 
//     description: string
// }

import { type ReactNode } from "react";

interface CourseGoalProps {
    title: string, 
    description: string,
    children: ReactNode
}

const CourseGoal = ({title, description, children}: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            <button>Delete</button>
        </article>
    )
}

export default CourseGoal;