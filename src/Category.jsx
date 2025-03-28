import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";


export const categories = [
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:3,
        name:"soups",
        icon:<LuSoup className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:4,
        name:"pasta",
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:5,
        name:"main_course",
        icon:<MdFoodBank className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:7,
        name:"burger",
        icon:<SiBurgerking className="w-[60px] h-[60px] text-green-600"/>

    }
]