import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo1 from '../../Images/dress1.jpg'
import logo2 from '../../Images/dress2.jpg'
import logo3 from '../../Images/dress4.jpg'
import logo4 from '../../Images/gallery2.jpg'
import logo5 from '../../Images/gallery5.jpg'
import logo6 from '../../Images/gallery6.jpg'
import { FaRegAddressCard } from "react-icons/fa";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  return (
    <div className="footer row m-0 bg-dark">
      <div className="mt-4 form pb-2">
        <input className="text-black" type="email" name="Email" id="" placeholder="Email" />
        <input type="submit" value="Send" />
      </div>
      <div className="footer-text col-lg-4 col-12 bg-dark">
        <h3>About Me</h3>
        <p>
          {" "}
          <span className="icons me-2">
            <FaRegAddressCard />
          </span>{" "}
          Uttara Rajlokkhi Complex ,Dhaka-1230, <br /> Bangladesh
        </p>
        <p>
          {" "}
          <span className="icons me-2">
            <FaRegAddressCard />
          </span>{" "}
          Wonderful Fashion House ,Dhaka <br />,Uttara
        </p>
        <p>
          {" "}
          <BsFillTelephoneFill className="me-2" /> +88 01307-957682
        </p>
        <a
          className="icons-social"
          href="https://www.facebook.com/romanaidress.ekfa.10"
        >
          <BsFacebook />
        </a>
        <a className="icons-social" href="https://web.whatsapp.com/">
          <BsWhatsapp />
        </a>

        <a
          className="icons-social"
          href="https://www.linkedin.com/in/romana-idress-ekfa-9b991a225/"
        >
          <BsLinkedin />
        </a>
        <a className="icons-social" href="https://github.com/RomanaIdressEkfa">
          <BsGithub />
        </a>

        <a className="icons-social" href="https://www.youtube.com/">
          <BsYoutube />
        </a>
        <br />
      </div>
      <div className="col-lg-3 col-12 footer-text-2col  ">
        <h3>Nav Links</h3>
        <Link className="links" to="/products">
          {" "}
          Products
        </Link>
        <br />
        <Link className="links" to="/blogs">
          {" "}
          Blogs
        </Link>
        <br />
        <Link className="links" to="/about">
          {" "}
          About
        </Link>
        <br />
        <Link className="links" to="/signup">
          Sign Up
        </Link>
        <br />
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
      <div className="col-lg-3 col-12 footer-text-2col ">
        <h3>Dress Collection</h3>
        <div className='d-flex grid col-12'>
          <img className='img-size img-fluid' src={logo1} alt="" />
          <img className='img-size img-fluid' src={logo2} alt="" />
          <img className='img-size img-fluid' src={logo3} alt="" />

        </div>
        <br />
        <div className='d-flex grid col-12'>
          <img className='img-size img-fluid' src={logo4} alt="" />
          <img className='img-size img-fluid' src={logo5} alt="" />
          <img className='img-size img-fluid' src={logo6} alt="" />

        </div>
        <br />
      </div>
      <div className='bg-black text-white p-2 text-center '>
        Copyright {date}. All Rights Reserved
        <div>
          Designed by <b className='text'> Romana Idress Ekfa.</b>
        </div>
      </div>
    </div>

  );
};

export default Footer;

// import React from 'react';
// import logo from '../../images/dress1.jpg'
// import logo2 from '../../images/dress2.jpg'
// import logo3 from '../../images/dress3.jpg'
// import logo4 from '../../images/dress1.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';
// import ReactWhatsapp from 'react-whatsapp';
// import logo1 from '../../images/whatsapp.jpg'

// import './Footer.css';
// import { Link } from 'react-router-dom';
// import ShareLink from 'react-facebook-share-link'

// const Footer = () => {
//   const current = new Date();
//   const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
//   return (
//     <div>
//       <div>

//         <div className='d-flex bg-dark text-white '>
//           <div className='w-25 p-4 '>
//             <h5>About Dress</h5>
//             <p>Embrace the sunshine in perfect summer dresses from Wonderful Fashion House.</p>
//           </div>
//           <div className='w-40 p-4'>

//             <h5>Social Media</h5>

//             <ShareLink link='https://www.facebook.com/romanaidress.ekfa.10'>
//               {link => (
//                 <a href={link} target='_blank'><FontAwesomeIcon className=' p-2 icon' icon={faFacebookF} /></a>
//               )}
//             </ShareLink>
//             <span>
//               <ReactWhatsapp number="01307-957682" message="Hello!!How are you?" />
//               {link => (
//                 <img className='whatsapp' src={logo1} alt="" />
//               )}

//             </span>





//           </div>
//           <div className='w-25 p-4'>
//             <h5>Contact me</h5>
//             <p>Phone: 01307-957682</p>
//             <p>Email: ekfaeshita@gmail.com</p>
//             <p>District: Tangail</p>


//           </div>
//           <div className='w-25 p-4'>
//             <h5>Dress Collection</h5>

//             <div className='d-flex grid'>
//               <img className='img-size img-fluid' src={logo} alt="" />
//               <img className='img-size img-fluid' src={logo2} alt="" />
//               <img className='img-size img-fluid' src={logo3} alt="" />

//             </div>
//             <br />
//             <div className='d-flex grid'>
//               <img className='img-size img-fluid' src={logo} alt="" />
//               <img className='img-size img-fluid' src={logo2} alt="" />
//               <img className='img-size img-fluid' src={logo3} alt="" />

//             </div>
//           </div>

//         </div>
//         <div className='bg-black text-white  p-2 '>
//           Copyright {date}. All Rights Reserved
//           <div>
//             Designed by <b className='text'> Romana Idress Ekfa.</b>
//           </div>
//         </div>


//       </div>
//     </div >
//   );
// };

// export default Footer;
