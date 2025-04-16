import { Button } from './components/ui/button/button'
import './styles/main.scss'

export function App() {
	return (
		<>
			<Button> primary</Button>
			<Button variant="secondary"> secondary </Button>
			<Button variant="destructive"> destructive </Button>
			<Button variant="ghost"> ghost </Button>
			<Button variant="outline"> outline </Button>
			<Button variant="success"> success </Button>
			<Button loading/> 
			Hello world Vite!
		</>
	)
}
