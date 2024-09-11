import * as AiIcons from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { GoNumber } from "react-icons/go";
import { TiSortAlphabetically } from "react-icons/ti";
import { BsPersonRaisedHand } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Alfabeto",
    path: "/PagAlf",
    icon: <TiSortAlphabetically />,
    cName: "nav-text",
  },
  {
    title: "Numeros",
    path: "/PagNúm",
    icon: <GoNumber />,
    cName: "nav-text",
  },
  {
    title: "Saudações",
    path: "/PagSau",
    icon: <BsPersonRaisedHand />,
    cName: "nav-text",
  },
  {
    title: "Pessoas",
    path: "/PagPess",
    icon: <FaPerson />,
    cName: "nav-text",
  },
  {
    title: "Unidades",
    path: "/PagUni",
    icon: <RiCommunityFill />,
    cName: "nav-text",
  },
  {
    title: "Quiz",
    path: "/Inicio",
    icon: <MdQuiz />,
    cName: "nav-text",
  },
  {
    title: "Sobre",
    path: "/Sobre",
    icon: <FaBookmark />,
    cName: "nav-text",
  },
];
