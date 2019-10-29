import React from "react";
import ReactDOM from "react-dom";
import * as style from "./style";
import NavMenu from "./NavMenu";
import Sect1 from "./Sect1";
import Sect2 from "./Sect2";
import Sect3 from "./Sect3";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef1 = React.createRef();
    this.scrollRef2 = React.createRef();
    this.scrollLinkA = this.scrollLinkA.bind(this);
    this.scrollLinkB = this.scrollLinkB.bind(this);
  }

  scrollLinkA() {
    return this.scrollRef1.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  scrollLinkB() {
    return this.scrollRef2.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  render() {
    return (
      <React.Fragment>
        <style.globalStyle />
        <button onClick={this.scrollLinkA}>Div1</button>
        <button onClick={this.scrollLinkB}>Div2</button>
        <NavMenu onClick={this.scrollLink} />
        <div ref={this.scrollRef1}>
          <Sect1 />
        </div>
        <div ref={this.scrollRef2}>
          <Sect2 />
        </div>
        <Sect3 />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
