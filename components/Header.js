import { FaReact } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Header = ({ fullname, address, color, checkLogin, showMsg }) => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <Navbar className="mb-4" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <FaReact size={30} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link className={router.pathname === "/" ? "active" : ""}>หน้าหลัก</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className={router.pathname === "/contact" ? "active" : ""}>ติดต่อเรา</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link className={router.pathname === "/about" ? "active" : ""}>เกี่ยวกับเรา</Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link className={router.pathname === "/news" ? "active" : ""}>ข่าวสาร</Nav.Link>
            </Link>
            {
              session?.user ? (
                <Button 
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                >
              ออกจากระบบ
                </Button>
              ) : (
                <Link href="/login" passHref>
                  <Nav.Link className={router.pathname === "/login" ? "active" : ""}>เข้าสู่ระบบ</Nav.Link>
                </Link>
              )
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
