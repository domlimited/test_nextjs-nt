import AppLayout from "../components/layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getNews } from "../services/news";

const NewsPage = ({ total, course }) => {
  return (
    <div>
      <Card border="primary">
        <Card.Header>ข่าวสารทั้งหมด</Card.Header>
        <Card.Body>
          <Card.Title>จำนวนข่าวสาร {total}</Card.Title>
          {
            course.map((item, index) => {
                return <Card.Text key={item.id}> No. {index + 1} Topic: {item.topic} ID: {item.id}</Card.Text>
            })
          }
         
   
        </Card.Body>
      </Card>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const response = await getNews();


  return {
    props: {
      total: response.data.total,
      course: response.data.data,
    },
  };
};

export default NewsPage;

NewsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
