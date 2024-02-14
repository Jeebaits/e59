import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string,
  description: string,
  id: number
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]); // initialized to empty array with type CourseGoal
  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return [...prevGoals, newGoal]; // add to previous list
    });
  }

  // Create delete function
  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'image of goals'}}>
        <h1>Your Course Goals:</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      {/* create list of goals */}
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}

export default App;