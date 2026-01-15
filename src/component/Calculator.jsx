import React, { Component } from "react";
// import "./Calculator.css"; // optional for styling

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  // handle number and operator input
  onButtonClick = (value) => {
    this.setState({ display: this.state.display + value });
  };

  // clear the display
  onClear = () => {
    this.setState({ display: "" });
  };

  // evaluate the final expression
  onCalculate = () => {
    try {
      const result = eval(this.state.display);
      this.setState({ display: result.toString() });
    } catch{
      this.setState({ display: "Error" });
    }
  };

  render() {
    const buttons = [
      "7","8","9","/",
      "4","5","6","*",
      "1","2","3","-",
      "0",".","%","+",
      "**"
    ];

    return (
      <div style={styles.container}>
        <h2>React Calculator</h2>

        <input
          type="text"
          value={this.state.display}
          disabled
          style={styles.display}
        />

        <div style={styles.grid}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => this.onButtonClick(btn)}
            >
              {btn}
            </button>
          ))}

          <button style={styles.equalBtn} onClick={this.onCalculate}>
            =
          </button>
          <button style={styles.clearBtn} onClick={this.onClear}>
            C
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "250px",
    margin: "20px auto",
    textAlign: "center"
  },
  display: {
    width: "100%",
    height: "40px",
    marginBottom: "10px",
    fontSize: "20px",
    textAlign: "right"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px"
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    cursor: "pointer"
  },
  equalBtn: {
    gridColumn: "span 2",
    background: "#4CAF50",
    color: "white",
    padding: "15px",
    cursor: "pointer",
    fontSize: "18px"
  },
  clearBtn: {
    gridColumn: "span 2",
    background: "#f44336",
    color: "white",
    padding: "15px",
    cursor: "pointer",
    fontSize: "18px"
  }
};

export default Calculator;
