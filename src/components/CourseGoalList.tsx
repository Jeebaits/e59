import { type FC } from "react";
import CourseGoal from "./CourseGoal";

// Array of goals interface
interface CourseGoalListProps{
    goals:{
        title: string,
        description: string,
        id: number
    }[]
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals}) => {
  return (
    <ul>
        {goals.map((goal) => (
            <li>
                <CourseGoal title={goal.title} description={goal.description}>
                    <p>Author: JRamos</p>
                </CourseGoal>
            </li>
        ))}
      </ul>
  )
}

export default CourseGoalList;