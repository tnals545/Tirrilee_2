import { StyledLi } from "../styles/styled-components/Styled";

const CustomLi = () => {
  return (
    <StyledLi className="skeleton-li">
      <div className="skeleton-item">
        <div>
          <div className="skeleton-img" />
        </div>
        <div className="skeleton-info">
          <p className="skeleton-category" />
          <p className="skeleton-name" />
          <p className="skeleton-price" />
        </div>
      </div>
    </StyledLi>
  );
};

const Skeleton = () => {
  return (
    <>
      <CustomLi />
      <CustomLi />
      <CustomLi />
      <CustomLi />
      <CustomLi />
      <CustomLi />
      <CustomLi />
      <CustomLi />
    </>
  );
};

export default Skeleton;
