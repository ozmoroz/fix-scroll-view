import React from 'react';
import * as style from './style';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.scrollHere = this.scrollHere.bind(this);
    }

    scrollHere(e) {
        const refName = e.target.className;
        this.props.onClick(refName);
    }

    render() {
        return (
            <style.styledNav>
            <ul>
                <li><div className="ref1" onClick={this.scrollHere}><h3>|</h3><p>Div1</p></div></li>
                <li><div className="ref2" onClick={this.scrollHere}><h3>|</h3><p>Div2</p></div></li>
                <li><div className="ref3" onClick={this.scrollHere}><h3>|</h3><p>Div3</p></div></li>
            </ul>
            </style.styledNav>
        );
    }
}
export default NavMenu;
