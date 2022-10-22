import AppDbLayout from "../../components/dashboard/DbLayout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const DashboardIndexPage = () => {
  return (
    <div>
      <Card border="primary">
        <Card.Header>dashboard</Card.Header>
        <Card.Body>
     
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardIndexPage;

DashboardIndexPage.getLayout = function getLayout(page) {
  return <AppDbLayout>{page}</AppDbLayout>;
};
