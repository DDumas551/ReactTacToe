import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
        </div>
        <div className="board-row">
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
        </div>
        <div className="board-row">
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
        </div>
        <div className="board-row">
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
        </div>
        <div className="board-row">
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          {this.renderSquare(54)}
        </div>
        <div className="board-row">
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          {this.renderSquare(63)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
        </div>
        <div className="board-row">
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
          {this.renderSquare(70)}
          {this.renderSquare(71)}
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(76)}
        </div>
        <div className="board-row">
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
          {this.renderSquare(80)}
          {this.renderSquare(81)}
          {this.renderSquare(82)}
          {this.renderSquare(83)}
          {this.renderSquare(84)}
          {this.renderSquare(85)}
          {this.renderSquare(86)}
          {this.renderSquare(87)}
        </div>
        <div className="board-row">
          {this.renderSquare(88)}
          {this.renderSquare(89)}
          {this.renderSquare(90)}
          {this.renderSquare(91)}
          {this.renderSquare(92)}
          {this.renderSquare(93)}
          {this.renderSquare(94)}
          {this.renderSquare(95)}
          {this.renderSquare(96)}
          {this.renderSquare(97)}
          {this.renderSquare(98)}
        </div>
        <div className="board-row">
          {this.renderSquare(99)}
          {this.renderSquare(100)}
          {this.renderSquare(101)}
          {this.renderSquare(102)}
          {this.renderSquare(103)}
          {this.renderSquare(104)}
          {this.renderSquare(105)}
          {this.renderSquare(106)}
          {this.renderSquare(107)}
          {this.renderSquare(108)}
          {this.renderSquare(109)}
        </div>
        <div className="board-row">
          {this.renderSquare(110)}
          {this.renderSquare(111)}
          {this.renderSquare(112)}
          {this.renderSquare(113)}
          {this.renderSquare(114)}
          {this.renderSquare(115)}
          {this.renderSquare(116)}
          {this.renderSquare(117)}
          {this.renderSquare(118)}
          {this.renderSquare(119)}
          {this.renderSquare(120)}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          // squares: Array(121).fill(null),
          squares: Array(121).fill("X"),
        },
      ],
      xIsNext: true,
      remainingMoves: 121,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      remainingMoves: this.state.remainingMoves - 1,
    });
    console.log(history);
  }

  render() {
    let xPoints = 0;
    let oPoints = 0;
    const { history, xIsNext, remainingMoves } = this.state;
    const current = history[history.length - 1];
    let winner = false;

    if (remainingMoves === 0) {
      calculateWinner(current.squares);
    }

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
      <div className="game App">
        <div className="title">Ultimate Tic-Tac-Toe</div>
        <div className="game-board">
          <div className="centerer">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            {remainingMoves !== 0
              ? `Squares left to fill: ${remainingMoves}`
              : `Player X with ${xPoints} and Player O with ${oPoints}`}
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    // horizontal
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
    [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
    [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
    [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87],
    [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98],
    [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
    [110, 111, 112, 113, 115, 116, 117, 118, 119, 120],
    // vertical
    [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110],
    [1, 12, 23, 34, 45, 56, 67, 78, 89, 100, 111],
    [2, 13, 24, 35, 46, 57, 68, 79, 90, 101, 112],
    [3, 14, 25, 36, 47, 58, 69, 80, 102, 113],
    [4, 15, 26, 37, 48, 59, 70, 81, 92, 103, 114],
    [5, 16, 27, 38, 49, 60, 71, 82, 93, 104, 115],
    [6, 17, 28, 39, 50, 61, 72, 83, 94, 105, 116],
    [7, 18, 29, 40, 51, 62, 73, 84, 95, 106, 117],
    [8, 19, 30, 41, 52, 63, 74, 85, 96, 107, 118],
    [9, 20, 31, 42, 53, 64, 75, 86, 97, 108, 119],
    [10, 21, 32, 43, 54, 65, 76, 87, 98, 109, 120],
    // bottom left to top right diagonal
    [88, 100, 112],
    [77, 89, 101, 113],
    [66, 78, 90, 102, 114],
    [55, 67, 79, 91, 103, 115],
    [44, 56, 68, 80, 92, 104, 116],
    [33, 45, 57, 69, 81, 93, 105, 117],
    [22, 34, 46, 58, 70, 82, 94, 106, 118],
    [11, 23, 35, 47, 59, 71, 83, 95, 107, 119],
    [0, 12, 24, 36, 48, 60, 71, 84, 96, 108, 120],
    [1, 13, 25, 37, 49, 61, 73, 85, 97, 109],
    [2, 14, 26, 38, 50, 62, 74, 86, 98],
    [3, 15, 27, 39, 51, 63, 75, 87],
    [4, 16, 28, 40, 52, 64, 76],
    [5, 17, 29, 41, 53, 65],
    [6, 18, 30, 42, 54],
    [7, 19, 31, 43],
    [8, 20, 32],
    // top left to bottom right
    [22, 12, 2],
    [33, 23, 13, 3],
    [44, 34, 24, 14, 4],
    [55, 45, 35, 25, 15, 5],
    [66, 56, 46, 36, 26, 16, 6],
    [77, 67, 57, 47, 37, 27, 17, 7],
    [88, 78, 68, 58, 48, 38, 28, 18, 8],
    [99, 89, 79, 69, 59, 49, 39, 29, 19, 9],
    [110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
    [111, 101, 91, 81, 71, 61, 51, 41, 31, 21],
    [112, 102, 92, 82, 72, 62, 52, 42, 32],
    [113, 103, 93, 8373, 63, 53, 43],
    [114, 104, 94, 84, 74, 64, 54],
    [115, 105, 95, 85, 75, 65],
    [116, 106, 96, 86, 76],
    [117, 107, 97, 87],
    [118, 108, 98],
  ];

  console.log(squares);

  // for (let i = 0; i < lines.length; i++) {}
}

export default App;
