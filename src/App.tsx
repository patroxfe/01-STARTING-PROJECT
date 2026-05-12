import CourseGoalList from './components/CourseGoalList.tsx'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header.tsx'
import { useState } from 'react'
import NewGoal from './components/NewGoal.tsx'

export type CourseGoal = {
	title: string
	description: string
	id: number
}

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]) // określenie typu dla stanu, który jest tablicą obiektów CourseGoal

	function handleAddGoal(goal: string, summary: string) {
		setGoals(prevgoals => {
			const newGoal: CourseGoal = {
				id: Math.random(), // generowanie losowego id dla nowego celu
				title: goal,
				description: summary,
			}

			return [...prevgoals, newGoal]
		})
	}

	function handleDeleteGoal(id: number) {
		setGoals(prevgoals => prevgoals.filter(goal => goal.id !== id))
	}

	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Your course Goals</h1>
			</Header>
			<NewGoal onAddGoal={handleAddGoal} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	)
}
