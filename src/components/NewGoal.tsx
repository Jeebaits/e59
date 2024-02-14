import { useRef, type FC, type FormEvent } from "react";

interface NewGoalProps{
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {
    // useRef is used to extract data from input elements
    const goal = useRef<HTMLInputElement>(null); // Default is null and type is HTMLInputElement
    const summary = useRef<HTMLInputElement>(null);
    // Create submit function
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredGoal = goal.current!.value; // ! means not nullable
        const enteredSummary = summary.current!.value; // ! means not nullable

        // Resets the input
        event.currentTarget.reset();

        // Invoke onAddGoal
        onAddGoal(enteredGoal, enteredSummary);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal;