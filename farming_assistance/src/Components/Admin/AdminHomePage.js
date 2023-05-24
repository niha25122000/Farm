//import "./CustomNav";
//import Button from '../UI/Button';

import SideNav from  './SideNavigation';
import img from './ADDmin.jpg';

const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh'
  };


const HomeAdmin= ({ children }) => {
      return (
        <div style={style}>
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-md-10">
              <SideNav/>
            </div>
            <div className="col-md-9">
              { children }
            </div>
          </div>
        
        </div>
        </div>
      );
    };
  
    
    export default HomeAdmin;