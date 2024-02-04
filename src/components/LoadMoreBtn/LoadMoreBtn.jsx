import { StyledBtn } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ handleNewPage }) => {
  return (
    <StyledBtn type="button" onClick={handleNewPage}>
      Load more
    </StyledBtn>
  );
};

export default LoadMoreBtn;
