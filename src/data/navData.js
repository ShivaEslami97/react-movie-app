import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdLibraryAdd } from "react-icons/md";

export const navList = [
  {
    title: "Home",
    icon: <AiFillHome />,
  },
  {
    title: "Search",
    icon: <BsSearch />,
  },
  {
    title: "My List",
    icon: <MdLibraryAdd />,
  },
  {
    title: "Favourite List",
    icon: <AiFillHeart />,
  },
  // {
  //   title: "Categories",
  //   icon: <BiCategory />,
  // },
  // {
  //   title: "Setting",
  //   icon: <AiOutlineSetting />,
  // },
  // {
  //   title: "Logout",
  //   icon: <AiOutlineLogout />,
  // },
];
