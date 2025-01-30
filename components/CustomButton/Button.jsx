import Link from 'next/link';

const Button = ({buttonText="Download App", className = " " }) => {
  return (
   <div className='w-full'>
     <Link href="https://play.google.com/store/apps?hl=en">
      <div className="relative inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium bg-purple-SECONDARY text-purple-PRIMARY transition duration-500 ease-out rounded shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-purple-PRIMARY group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-purple-PRIMARY transition-all duration-500 transform group-hover:translate-x-full ease">
          {buttonText}
        </span>
        <span className="relative invisible">{buttonText}</span>
      </div>
    </Link>
   </div>
  );
};

export default Button;

