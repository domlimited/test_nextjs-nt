import AppDbLayout from "../../components/dashboard/DbLayout";
import Card from "react-bootstrap/Card";
import { UseUserSWR } from "../../services/user";
import { Spinner, Alert } from "react-bootstrap";

const userAxiosPage = () => {
  const { user,loading,error } = UseUserSWR();
  console.log(user);

  if(loading){
    return (
      <div className="text-center"><Spinner  /></div>
    )
  }

  if(error){
    return (
      <div className="text-center"><Alert variant="danger">เกิดข้อผิดพลาด</Alert></div>
    )
  }
  return (
    <div>
      <Card border="primary">
        <Card.Header>User Page</Card.Header>
        <Card.Body>
          {
            user && (
                user.map((item) =>{
                    return <div key={item._id}>{item.name}</div>
                })  
            )
          }   
        </Card.Body>
      </Card>
    </div>
  );
};

export default userAxiosPage;

userAxiosPage.getLayout = function getLayout(page) {
  return <AppDbLayout>{page}</AppDbLayout>;
};