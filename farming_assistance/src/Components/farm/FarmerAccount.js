//import "./CustomNav";
//import Button from '../UI/Button';
import "./farm.account.css";
import SideBar from  './SideBar';
import img from './farm565.jpg';


const style = {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  minHeight: '100vh'
};

const Side = ({ children }) => {
      return (
        <div style={style}>
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-md-10">
              <SideBar/>
            </div>
            <div className="col-md-9">
              { children }
            </div>
          </div>
        
        </div>
        </div>
      );
    };
  
    
    export default Side;
 