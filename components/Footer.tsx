import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-accent py-8 text-secondary'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='flex space-x-4'>
            <Link href='/' className='text-gray-100 hover:text-red-400'  >
              Home
            </Link>
            <Link href='/about' className='text-gray-100 hover:text-red-400'  >
              About
            </Link>
            <Link href='/contact' className='text-gray-100 hover:text-red-400'  >
              Contact
            </Link>
            <Link href='/blogs' className='text-gray-100 hover:text-red-400'  >
              Blogs
            </Link>
          </div>
          <div className='flex space-x-4'>
            <Link
              href='https://x.com/its_naaleeye?t=UeXN580xMCRPeFhjdQnfsQ&s=09'
              target='_blank'
              className='text-gray-100 hover:text-red-400'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              href='https://www.youtube.com/@maqalka?si=1M-_v0BikPOkSmFt'
              target='_blank'
              className='text-gray-100 hover:text-red-400'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              href='https://www.facebook.com/maqalkabulshada?mibextid=ZbWKwL'
              target='_blank'
              className='text-gray-100 hover:text-red-400'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 text-center text-gray-100'>
          <span>Design with 💓 by <Link href='https://x.com/HusseinKadare2' target='_blank' className='text-[#f63d68]'>Hussein</Link> </span>
          <div>
          &copy; {new Date().getFullYear()} <strong className='text-[#f63d68]'>Maqalka.</strong> All rights
          reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
