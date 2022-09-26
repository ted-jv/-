import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Container, Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  // 로그인 체크해서 --> 로그아웃 할 수 있게 만들어줌

  const [is_login, setLogin] = React.useState(false);

  const loginCheck = async user => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    // console.log(auth.currentUser);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  // navigate

  const navigate = useNavigate();

  const goto_home = () => {
    navigate('/');
  };

  const goto_join = () => {
    navigate('/Join');
  };

  const goto_login = () => {
    navigate('/Login');
  };

  const goto_logout = () => {
    signOut(auth);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ height: '100px' }}>
      <Container>
        <Navbar.Brand style={{ font_size: '20px' }} href="/">
          Egon Schiele Art
        </Navbar.Brand>
        <div style={{ position: 'relative', right: '10px' }}>
          <Nav className="me-auto">
            {is_login ? (
              <Button variant="dark" onClick={goto_logout}>
                Logout
              </Button>
            ) : (
              <Button variant="dark" onClick={goto_login}>
                Login
              </Button>
            )}
            <Button variant="dark" onClick={goto_join}>
              Sign up
            </Button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
