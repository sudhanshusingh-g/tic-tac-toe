import {useState} from 'react'
import Square from './Square';

function Board() {
    const[squares,setSquares]=useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];
    const handleClick=(i)=>{
        if (squares[i] || calculateWinner(squares)) {
          return;
        }
        const nextSquares=squares.slice();
        if(xTurn){
            nextSquares[i]="X";
        }
        else{
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXTurn(!xTurn);
    }




    function calculateWinner(){
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
                return squares[a];
            }
            
        }
        return null;
    }


    const winner=calculateWinner(squares);
    let staus;
    if(winner){
        staus= "Winner: " +winner;
    }
    else{
        staus= "Next Player: " + (xTurn ? "X" :"O");
    }


    

  return (
    <>

      <div className="grid grid-cols-3 p-4 rounded-sm gap-4">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <div className='text-center'>{staus}</div>
    </>
  );
}

export default Board