import DbFooter from "./DbFooter";
import DbHeader from "./DbHeader";
import DbSidebar from "./DbSidebar";

const DbLayout = ({ children }) => {
  return (
    <div>
      <div id="page-top">
        <div id="wrapper">
          <DbSidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <DbHeader />
            <div id="content">
              <div className="container-fluid">
                <main>{children}</main>
              </div>
            </div>
            <DbFooter />
          </div>
        </div>
      </div>
    </div>
  );
};


export default DbLayout;
