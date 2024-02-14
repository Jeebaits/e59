import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string,
  description: string,
  id: number
}
const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]); // initialized to empty array with type CourseGoal
  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn Vite + React-TS',
        description: 'from zero to hero'
      }
      return [...prevGoals, newGoal]; // add to previous list
    });
  }
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'image of goals'}}>
        <h1>Your Course Goals:</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      {/* create list of goals */}
      <CourseGoalList goals = {goals}/>
    </main>
  )
}

export default App;