import React, {Component} from "react";

import '../fontawesome/css/all.css';
import './NavBar.css';
import {DoActionFunction, EmptyFunctions} from '../Types';

type NavBarProps = {
    toggleSettingsPopup: DoActionFunction,
    toggleMenuPopup: DoActionFunction,
};

type NavBarState = NavBarProps & {
    // add more attributes here ...
};

export class NavBar extends Component<NavBarProps, NavBarState> {

    state = {
        toggleSettingsPopup: EmptyFunctions.emptyDoActionFunction,
        toggleMenuPopup: EmptyFunctions.emptyDoActionFunction,
    };

    constructor(props: NavBarProps) {
        super(props);

        this.state.toggleSettingsPopup = this.props.toggleSettingsPopup;
        this.state.toggleMenuPopup = this.props.toggleSettingsPopup;
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-button nav-float-right"
                     onClick={(event) => {
                         this.props.toggleSettingsPopup(this);
                     }}><i className="fas fa-solid fa-gear"> </i></div>
                <div className="nav-button nav-float-right"
                     onClick={(event) => {
                         this.props.toggleSettingsPopup(this);
                     }}><i className="fas fa-solid fa-chart-simple"> </i></div>
                <div className="nav-button nav-float-left"
                     onClick={(event) => {
                         this.props.toggleMenuPopup(this);
                         event.preventDefault();
                     }}><i className="fas fa-solid fa-bars"> </i></div>
                <div className="nav-title">Nerdle (a familiar word game)</div>
            </div>
        );
    }
}

// export const UNUSED = 42;