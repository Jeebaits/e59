import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App.tsx"; // use alias to resolve identifier conflict

// Array of goals interface
interface CourseGoalListProps{
    onDeleteGoal: (id: number) => void;
    goals: CourseGoalType[];
    // goals:{
    //     title: string,
    //     description: string,
    //     id: number
    // }[]
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
  return (
    <ul>
        {goals.map((goal) => (
            <li>
                <CourseGoal title={goal.title} description={goal.description} onDelete={onDeleteGoal} id={goal.id}>
                    <p>Author: JRamos</p>
                </CourseGoal>
            </li>
        ))}
      </ul>
  )
}

export default CourseGoalList;