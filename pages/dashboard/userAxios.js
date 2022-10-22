
import AppDbLayout from "../../components/dashboard/DbLayout";
import Card from "react-bootstrap/Card";
import { getUserAxios } from "../../services/user";
import { useEffect, useState } from "react";


const UserPage = () => {
    const [user,setUser] = useState([]);

    const getData = async () => {
        const response = await getUserAxios();
        setUser(response.data);
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div>
      <Card border="primary">
        <Card.Header>User Page</Card.Header>
        <Card.Body>  
           {
            user.map((item) => {
                return <div key={item._id}>{item.name}</div>
            })
           }
        </Card.Body>
      </Card>
    </div>
  );
};


export default UserPage;

UserPage.getLayout = function getLayout(page) {
    return <AppDbLayout>{page}</AppDbLayout>;
  };  
