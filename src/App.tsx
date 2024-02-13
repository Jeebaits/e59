import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";

const App = () => {
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'image of goals'}}>
        <h1>Your Course Goals:</h1>
      </Header>
      <CourseGoal title="Learn Vite + React-TS" description="from zero to hero">
        <p>Author: JRamos</p>
      </CourseGoal>
    </main>
  )
}

export default App;