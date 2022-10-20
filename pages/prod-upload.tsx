import NavBar from "components/Nav_Bar";
import ProdUploadOrEdit from "components/ProdUploadOrEdit";
import Title from "components/Title";

const ProdUpload = () => {
  return (
    <>
      <Title title="Upload" />
      <NavBar />
      <ProdUploadOrEdit work="upload" />
    </>
  );
};

export default ProdUpload;
