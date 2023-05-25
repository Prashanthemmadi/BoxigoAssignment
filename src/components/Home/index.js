import {FaTruck} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiLogoutCircleLine} from 'react-icons/ri'
import {BsFillChatLeftQuoteFill} from 'react-icons/bs'

import './index.css'

const Home = () => (
  <div className="home">
    <div className="moves">
      <FaTruck size={20} />
      <h1 className="my-moves-heading">MY MOVES</h1>
    </div>
    <div className="home-details">
      <CgProfile size={20} />
      <h1 className="home-headings">MY PROFILE</h1>
    </div>
    <div className="home-details">
      <BsFillChatLeftQuoteFill size={20} />
      <h1 className="home-headings">GET QUOTE</h1>
    </div>
    <div className="home-details">
      <RiLogoutCircleLine size={20} />
      <h1 className="home-headings">LOGOUT</h1>
    </div>
  </div>
)

export default Home
