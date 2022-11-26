import { useNavigate } from 'react-router-dom';
//allows me to use navigate easily in a class component
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

//in whatever your class is example: class component addcontact, we import withRouter  and do : 
//export default withRouter (AddContact);

//to navigate simply : this.props.navigate("whateveer your route is ")