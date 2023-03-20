import React, {Component} from "react";

import './KeyboardTiles.css';
import KeyTileRow from "./KeyTileRow";

type KeyboardTilesProps = {
    guessed: string;
    matched: string;
    // add more properties here ...
};

type KeyboardTilesState = KeyboardTilesProps & {
    // add more attributes here ...
};

export default class KeyboardTiles extends Component<KeyboardTilesProps, KeyboardTilesState> {

    state = {
        guessed: '',
        matched: '',
    };

    constructor(props: KeyboardTilesProps) {
        super(props);

        this.state.guessed = this.props.guessed;
        this.state.matched = this.props.matched;
    }

    render() {
        return (
            <div className="key-rows">
                <KeyTileRow letters='qwertyuiop' guessed={this.props.guessed} matched={this.props.matched} />
                <KeyTileRow letters='asdfghjkl'  guessed={this.props.guessed} matched={this.props.matched} />
                <KeyTileRow letters='⏎zxcvbnm⌫'  guessed={this.props.guessed} matched={this.props.matched} />
            </div>
        );
    }
}
