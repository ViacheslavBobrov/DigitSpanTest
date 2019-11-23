import React from "react";
import DigitGenerator from "./components/DigitGenerator";
import DigitKeyboard from "./components/DigitKeyboard";
import RoundStatistic from "./components/RoundStatistic";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import HealthBar from './components/HealthBar';
import 'typeface-roboto';
import StartButton from "./components/StartButton";
import { CSSTransition } from 'react-transition-group';
import './index.css'



class App extends React.Component<{}, {
	digitsSequence: number[], score: number, level: number, health: number, currentSymbol: any,
	isRoundOngoing: boolean, isSequenceNotGenerated: boolean
}> {

	private currentStep: number;
	private sequenceLength: number;
	private isGameOver: boolean;



	constructor(props: any) {
		super(props);
		this.handleStartBtnClick = this.handleStartBtnClick.bind(this);
		this.state = {
			digitsSequence: [],
			score: 0,
			level: 1,
			health: 3,
			currentSymbol: "",
			isRoundOngoing: false,
			isSequenceNotGenerated: true
		}

		this.currentStep = 0;
		this.sequenceLength = 5;
		this.isGameOver = false;
	}

	setTimeInterval(callback: any, delay: number) {
		var i = 0;
		var intervalId = setInterval(() => {
			if (i === this.sequenceLength) {
				this.setState({ isSequenceNotGenerated: false, currentSymbol: "" })
				clearInterval(intervalId);
			} else {
				callback();
				i++;
			}

		}, delay);
	}



	generateNextDigit() {
		const nextNumber: number = Math.floor(Math.random() * 10);
		this.setState({
			digitsSequence: this.state.digitsSequence.concat(nextNumber),
			currentSymbol: nextNumber
		})

	}

	resetRound(score: number, level: number, newSequenceLength: number, health: number) {
		this.currentStep = 0;
		this.sequenceLength = newSequenceLength;
		this.setState({
			digitsSequence: [], score: score, level: level, health: health,
			isSequenceNotGenerated: true, isRoundOngoing: false
		});

	}

	handleStartBtnClick() {
		if (this.isGameOver) {
			this.resetRound(0, 1, 5, 3);
			this.isGameOver = false;
		} else {
			this.resetRound(this.state.score, this.state.level, this.sequenceLength, this.state.health);
		}
		
		this.setState({ isRoundOngoing: true })
		this.setTimeInterval(() => this.generateNextDigit(), 200);
	}

	handleDigitBtnClick(currentStepActualDigit: number) {
		const currentStepExpectedDigit = this.state.digitsSequence[this.currentStep]
		if (currentStepExpectedDigit === currentStepActualDigit) {
			this.setState({ score: this.state.score + 1, currentSymbol: currentStepExpectedDigit });
			this.currentStep++
		} else {
			if (this.state.health > 1) {
				this.setState({ health: this.state.health - 1, currentSymbol: 'X' });
			} else {
				this.setState({ health: 0, isRoundOngoing: false, isSequenceNotGenerated: true });
				this.isGameOver = true;
			}

		}

		if (this.currentStep === this.sequenceLength) {
			this.setState({ currentSymbol: 'V' });
			this.resetRound(this.state.score, this.state.level + 1, this.sequenceLength + 1, this.state.health)
		}
	}


	render() {
		const digitsSequence: number[] = this.state.digitsSequence;
		//const newDigit: any = this.state.isSequenceNotGenerated ? digitsSequence[digitsSequence.length - 1] : "";
		console.log(digitsSequence)
		return (
			<Grid container component="main" style={{ height: '100vh', margin: 0, border: 0 }}>
				<Grid item xs={9} sm={9} md={9} style={{ backgroundColor: '#2E2937' }}>
					<HealthBar health={this.state.health} />
					<CSSTransition
						in={true}
						timeout={350}
						classNames="display"
						unmountOnExit
						appear
					>
						<DigitGenerator newDigit={this.state.currentSymbol} sequenceLength={this.sequenceLength} />
					</CSSTransition>
					<DigitKeyboard onClick={(digit: number) => this.handleDigitBtnClick(digit)}
						disabled={this.state.isSequenceNotGenerated} />
				</Grid>
				<Grid item xs={3} sm={3} md={3} style={{ backgroundColor: '#8F7EA8' }}>
					<RoundStatistic text={'Level'} level={this.state.level} />
					<RoundStatistic text={'Score'} level={this.state.score} />
					<StartButton onClick={this.handleStartBtnClick} disabled={this.state.isRoundOngoing} />
				</Grid>
			</Grid>
		);
	}
}

export default App;