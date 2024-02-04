import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <FallingLines color="#3470FF" width="100" visible={true} ariaLabel="falling-lines-loading" />
    </div>
  );
};

export default Loader;
