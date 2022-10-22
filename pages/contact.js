import Button from "react-bootstrap/Button";
import AppLayout from '../components/layout';

const ContactPage = () => {
  const fullname = "Jinadit Jantaraka";
  const address = <h2>Bangkok</h2>;
  const islogin = true;

  const showMsg = () => {
    alert("สำเร็จ");
  };
  return (
    <div>
     <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <h1 className="mt-5">
          ติดต่อเรา {fullname.toUpperCase()}
        </h1>
        <p className="lead">
          วันนี้ {new Date().toLocaleDateString()} 
        </p>
        {address}
        <Button variant="dark" onClick={showMsg}>
          คลิก
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }
