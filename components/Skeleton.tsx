import { StyledLi } from "styles/styled-components/StyledLi";

const CustomSkeleton = () => {
  return (
    <div className="skeleton-item">
      <div>
        <p className="skeleton-img" />
      </div>
      <div className="skeleton-info">
        <p className="skeleton-category" />
        <p className="skeleton-name" />
        <p className="skeleton-price" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <>
      <StyledLi className="skeleton-li">
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
      </StyledLi>
      <StyledLi className="skeleton-li">
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
      </StyledLi>
    </>
  );
};

export default Skeleton;
