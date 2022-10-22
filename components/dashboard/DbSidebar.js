import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { useSession } from "next-auth/react";

const DbSidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            {session?.user && <span>{session.user.name}</span>}
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link href="/dashboard" passHref>
            <a
              className={
                router.pathname === "/dashboard"
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>หน้าหลัก</span>
            </a>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">เมนู</div>
        <li className="nav-item">
          <Link href="/dashboard/user" passHref>
            <a
              className={
                router.pathname === "/dashboard/user"
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              <i className="fas fa-fw fa-cog" />
              <span>User</span>
            </a>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <li className="nav-item">
          <Button
            className="nav-link"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            <i className="fas fa-fw fa-cog" />
            <span>ออกจากระบบ</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default DbSidebar;
