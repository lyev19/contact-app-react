import { useParams } from 'react-router-dom';
//allows me to use navigate easily in a class component
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const id = useParams();
    
    return (
      <Component
        params={id}
        {...props}
        />
    );
  };
  
  return Wrapper;
};