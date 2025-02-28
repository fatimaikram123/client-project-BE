import { NavLink } from 'react-router-dom';
import leftarrow from '../assets/images/leftarrow.png';
import community from '../assets/images/community.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
import telegram from '../assets/images/telegram.png';
import linkdin from '../assets/images/linkdin.png';
import discord from '../assets/images/discord.png';
import instagram from '../assets/images/instagram.png';
import copy from '../assets/images/copy.png';
const Community = () => {
    const textToCopy = "Email";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied to clipboard!");
    });
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <NavLink to="/hub">
          <div className="pl-10 pt-2 max-sm:pl-2 flex items-center gap-2">
            <img className="max-sm:w-7 w-10 absolute left-5" src={leftarrow} alt="Back" />
            <h2 className="text-xl font-semibold">Community</h2>
          </div>
        </NavLink>
      </div>
      <div className='flex justify-center mt-5'>
      <img src={community} width={280}  alt="" /></div>
      <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-full h-15 max-sm:justify-center  flex justify-center items-center mt-2'>
           <a href=""><div className='bg-gray-300 w-50 max-sm:w-40 h-15 content-center rounded-3xl'>
                <div className='flex'><img src={twitter} width={50} alt="" />
                <div className=''>
                    <div>Twitter</div>
                    <div className='text-gray-700'>@Redotpay</div>
                </div>
                </div>
            </div></a> 
          <div>
           <a href=""><div className='bg-gray-300 w-50 max-sm:w-40 h-15 content-center rounded-3xl'>
                <div className='flex'><img src={facebook} width={50} alt="" />
                <div className=''>
                    <div>Facebook</div>
                    <div className='text-gray-700'>@Redotpay</div>
                </div>
                </div>
            </div> </a> 
            </div>
        </div>
      <div className='w-full h-15  flex max-sm:justify-center justify-center items-center mt-2'>
           <a href=""><div className='bg-gray-300 w-50 h-15 max-sm:w-40 content-center rounded-3xl'>
                <div className='flex'><img src={telegram} width={50} alt="" />
                <div className=''>
                    <div>Telegram</div>
                    <div className='text-gray-700'>@Redotpay</div>
                </div>
                </div> 
            </div></a> 
            <div>
            <div className='bg-gray-300 w-50 h-15 max-sm:w-40 content-center rounded-3xl'>
              <a href=""> <div className='flex'><img src={linkdin} width={50} alt="" />
                <div className=''>
                    <div>LinkedIn</div>
                    <div className='text-gray-700'>@Redotpay</div>
                </div>
                </div></a> 
            </div>
            </div>
        </div>
        <div className='w-full h-15  max-sm:justify-center flex justify-center items-center mt-2'>
           <a href=""><div className='bg-gray-300 w-50 max-sm:w-40 h-15 content-center rounded-3xl'>
                <div className='flex'><img src={discord} width={50} alt="" />
                <div className=''>
                    <div>Discord</div>
                    <div className='text-gray-700'>@Redotpay</div>
                </div>
                </div>
            </div></a>
            <div>
           <a href=""><div className='bg-gray-300 max-sm:w-40 w-50 h-15 content-center rounded-3xl'>
                <div className='flex'><img src={instagram} width={50} alt="" />
                <div className=''>
                    <div>Instagram</div>
                    <div className='text-gray-700'>@Redotpay</div>
                </div>
                </div>
            </div></a> 
            </div>
        </div>
        
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-100 h-10 mt-1  '>
      
        
                  
                   <div className="w-full max-w-md bg-gray-200 p-1 mt-1 rounded-xl shadow-md text-center">
        <div className="text-gray-700 font-semibold">Support Email</div>
        <div className="flex justify-between items-center mt-2 bg-white p-2 rounded-lg border">
          <span className="truncate text-gray-900">{textToCopy}</span>
          <button onClick={handleCopy} className="ml-2">
            <img src={copy} width={20} alt="Copy" />
          </button>
        </div>
      </div>
        </div>
      </div>
      </div>
  );
};

export default Community;

