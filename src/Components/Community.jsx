import { NavLink } from 'react-router-dom';
import leftarrow from '../assets/images/leftarrow.png';
const Community = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <NavLink to="/profile">
          <div className="pl-10 pt-2 max-sm:pl-2 flex items-center gap-2">
            <img className="max-sm:w-7 w-10 absolute left-5" src={leftarrow} alt="Back" />
            <h2 className="text-xl font-semibold">Community</h2>
          </div>
        </NavLink>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Community;

