import AppLayout from "../components/layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getProduct } from "../services/product";
import Image from "next/image";

const Home = ({ product }) => {
  return (
    <div>
      <Card border="primary">
        <Card.Header>หน้าหลัก</Card.Header>
        <Card.Body>
          <div className="album">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {product.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <div className="col mb-4">
                        <div className="card shadow-sm">
                          <Image
                            className="bd-placeholder-img card-img-top"
                            src={item.picture}
                            alt={item.picture}
                            width="100%"
                            priority={index}
                            height={200}
                          />
                          <div className="card-body">
                            <Card.Title>{item.title} </Card.Title>
                            <p className="card-text">{item.detail}</p>
                            <p className="card-text">{item.date}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  ดู
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  แก้ไข
                                </button>
                              </div>
                              <small className="text-muted">
                                view:{item.view}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export async function getStaticProps(context) {
  const response = await getProduct();
  return {
    props: {
      product: response.data.data,
      pevalidate: 30,
    }, // will be passed to the page component as props
  };
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
