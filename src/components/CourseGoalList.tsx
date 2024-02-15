import { type ReactNode, type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App.tsx"; // use alias to resolve identifier conflict
import InfoBox from "./InfoBox.tsx";

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
    // create logic for info/warningBox
    // empty return infoBox
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no goals as of the moment. Add some!
            </InfoBox>
        )
    }

    // if more than 3 goals, update the content of warningBox
    let warningBox: ReactNode;
    if (goals.length > 3) {
        warningBox = (
            <InfoBox mode="warning">
                Too many goals, don't put too much!
            </InfoBox>
        )
    }

    return (
        <>
            {/* display an info box */}
            {warningBox}

            <ul>
                {goals.map((goal) => (
                    <li>
                        <CourseGoal title={goal.title} description={goal.description} onDelete={onDeleteGoal} id={goal.id}>
                            <p>Author: JRamos</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CourseGoalList;