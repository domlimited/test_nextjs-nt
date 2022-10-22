import AppLayout from "../components/layout";
import Image from "next/image";
import { getVersion } from "../services/api";

//img
import ImgProfile from "../public/POP08670.jpeg";

const about = ({ message, version }) => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-6 m-md-3 text-center">
        <div className="col-md-5 p-lg-4 mx-auto my-4">
          <h1 className="display-4 font-weight-normal">เกี่ยวกับเรา</h1>
          <p className="lead font-weight-normal">{message} : {version}</p>
          <Image
            src={ImgProfile}
            alt="Picture of the author"
            width={400}
            height={500}
          />
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device box-shadow d-none d-md-block" />
        <div className="product-device product-device-2 box-shadow d-none d-md-block" />
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
 const response = await getVersion();
  return {
    props: {
      message: "SSG",
      version: response.data.data.version,
    }, // will be passed to the page component as props
  };
}

export default about;

about.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
