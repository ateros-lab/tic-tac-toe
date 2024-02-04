function Square({ value, setSquareValue }) {
  return (
    <button 
      onClick={setSquareValue}
      style={{
        color: value ? '#61dafb' : '#282c34',
      }}
    >
      {value || '-'}
    </button>
  );
}

export default Square;