import { Li } from "styles/styled-components/Li";

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
      <Li className="skeleton-li">
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
      </Li>
      <Li className="skeleton-li">
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
      </Li>
    </>
  );
};

export default Skeleton;
