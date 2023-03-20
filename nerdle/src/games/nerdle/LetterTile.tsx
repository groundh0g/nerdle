import React, {Component} from "react";

import './LetterTile.css';
// import {DoActionFunction, EmptyFunctions} from '../Types';

type LetterTileProps = {
    letter: string;
    expected: string;
    answer: string;
    row: number;
    col: number;
    // add more properties here ...
};

type LetterTileState = LetterTileProps & {
    // add more attributes here ...
};

export default class LetterTile extends Component<LetterTileProps, LetterTileState> {

    state = {
        letter: ' ',
        expected: '.',
        answer: '^^^^^',
        row: 0,
        col: 0,
    };

    constructor(props: LetterTileProps) {
        super(props);

        this.state.letter = this.props.letter;
        this.state.expected = this.props.expected;
        this.state.answer = this.props.answer;
        this.state.row = this.props.row;
        this.state.col = this.props.col;
    }

    render() {
        const letter = this.props.letter;
        const expected = this.props.expected;
        const answer = this.props.answer;
        const row = this.props.row;
        const col = this.props.col;

        const className: string = (() => {
            if(letter === ' ') return 'letter-tile letter-tile-blank';
            if(expected === letter) return 'letter-tile letter-tile-matched';
            if(answer.indexOf(letter) >= 0) return 'letter-tile letter-tile-valid';
            return 'letter-tile';
        })();

        return (
            <div className={className}><span id={`tile-${row}${col}`}>{letter.toUpperCase()}</span></div>
        );
    }
}

// export const UNUSED = 42;