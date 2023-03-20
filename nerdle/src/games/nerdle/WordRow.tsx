import React, {Component} from "react";

import './WordRow.css';
import LetterTile from './LetterTile';
import {LetterStates} from '../Types';

type WordRowProps = {
    guess: string;
    answer: string;
    row: number;
    // add more properties here ...
};

type WordRowState = WordRowProps & {
    // add more attributes here ...
};

export default class WordRow extends Component<WordRowProps, WordRowState> {

    state = {
        guess: '',
        answer: '',
        row: 0,
    };

    constructor(props: WordRowProps) {
        super(props);

        this.state.guess = this.props.guess;
        this.state.answer = this.props.answer;
        this.state.row = this.props.row;
    }

    render() {
        const guess = this.props.guess.padEnd(5, ' ');
        const answer = this.props.answer.padEnd(5, ' ');
        const row = this.props.row;

        return (
            <div className="word-row">
                <LetterTile answer={answer}
                            row={row} col={0}
                            expected={answer.substring(0,1)}
                            letter={guess.substring(0,1)} />
                <LetterTile answer={answer}
                            row={row} col={1}
                            expected={answer.substring(1,2)}
                            letter={guess.substring(1,2)} />
                <LetterTile answer={answer}
                            row={row} col={2}
                            expected={answer.substring(2,3)}
                            letter={guess.substring(2,3)} />
                <LetterTile answer={answer}
                            row={row} col={3}
                            expected={answer.substring(3,4)}
                            letter={guess.substring(3,4)} />
                <LetterTile answer={answer}
                            row={row} col={4}
                            expected={answer.substring(4,5)}
                            letter={guess.substring(4,5)} />
            </div>
        );
    }
}

// export const UNUSED = 42;