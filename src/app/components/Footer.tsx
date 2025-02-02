import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white py-16">
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="/shark.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-55"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>1234 Street Name</p>
            <p>City, State, 12345</p>
            <p>Email: info@seaworld.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4 ">Legal</h2>
            <ul>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
              <li>
                <Link href="#">Legal Information</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.linkedin.com/in/muneeb-usmani/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link href="https://github.com/Muneeb-Usmani" target="_blank">
                <FaGithub />
              </Link>
              <Link href="#">
                <FaYoutube />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-400" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Sea World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
