import NavBar from "components/Nav_Bar";
import ProdList from "components/ProdList";
import ProdUploadOrEdit from "components/ProdUploadOrEdit";
import Title from "components/Title";

const AllProdList = () => {
  return (
    <>
      <Title title="Home" />
      <NavBar />
      <ProdList cateType="all" />
    </>
  );
};

export default AllProdList;
