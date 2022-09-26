const Btn = ({ Name, click }) => {
  const style = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    width: '100%',
    display: 'block',
    cursor: 'pointer',
    fontFamily: 'Helvetica Neue LT Std',
    fontSize: '32px',
    fontWeight: '400',
    lineHeight: '32px',
    letterSpacing: '0em',
    textAlign: 'center',
    userSelect: 'none',
  };

  return (
    <button onClick={click} style={style}>
      {Name}
    </button>
  );
};

export default Btn;
