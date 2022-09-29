import Logo from '../../Errors/404.svg';

function NotFount() {
  const divStyles = {
    height: '100vh',
  };
  const imgStyle = {
    height: '100%',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <div style={divStyles}>
      <img style={imgStyle} src={Logo} alt="" />
    </div>
  );
}

export default NotFount;
