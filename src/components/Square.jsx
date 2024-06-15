// import {useState} from 'react'

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick(){
  //     setValue("X");
  // }
  return (
    <>
      <button
        className="h-8 w-8 p-8 flex items-center justify-center border text-2xl font-medium"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}

export default Square