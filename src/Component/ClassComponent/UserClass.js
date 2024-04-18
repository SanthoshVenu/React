import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>Count - {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment COunt
        </button>
        <h1>Count2 - {count2}</h1>

        <h2>{name}</h2>
        <h2>Ganga Tharshini</h2>
        <h2>Balamani Venugopal</h2>
      </div>
    );
  }
}
export default UserClass;
