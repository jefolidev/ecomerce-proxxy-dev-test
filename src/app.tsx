import { Button } from './components/ui/button/button'
import { Input } from './components/ui/input/input'
import './styles/main.scss'

export function App() {
	return (
		<>
			<div>
				<Button> primary</Button>
				<Button variant="secondary"> secondary </Button>
				<Button variant="destructive"> destructive </Button>
				<Button variant="ghost"> ghost </Button>
				<Button variant="outline"> outline </Button>
				<Button variant="success"> success </Button>
				<Button loading />
			</div>

			<div>
				<Input type="email" placeholder="Insira seu nome" size="sm" />
				<Input type="email" placeholder="Insira seu nome" size="base" />
				<Input type="email" placeholder="Insira seu nome" size="lg" />
			</div>
		</>
	)
}
