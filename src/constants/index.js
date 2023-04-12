import { TiGroup} from "react-icons/ti";
import { FaReact} from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdShoppingBag,MdAccessTimeFilled,MdOndemandVideo } from "react-icons/md";
import { IoBarChartSharp,IoGameController,IoSave,IoTimerOutline,IoFlag,IoCalendarNumber } from "react-icons/io5";
import images from "../assets/images/newfeed.jpg"

const leftSideTop = [
    {
        id:1,
        href:"###",
        icon:<VscAccount className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Phúc Luân"
    },
    {
        id:2,
        href:"###",
        icon:<VscAccount className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Bạn bè"
    },
    {
        id:3,
        href:"###",
        icon:<TiGroup className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Nhóm"
    },
    {
        id:4,
        href:"###",
        icon:<MdAccessTimeFilled className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Gần đây nhất"
    },
    {
        id:5,
        href:"###",
        icon:<MdShoppingBag className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Marketplace"
    },
    {
        id:6,
        href:"###",
        icon:<MdOndemandVideo className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Watch"
    },
    {
        id:7,
        href:"###",
        icon:<IoBarChartSharp className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Bảng điều khiển"
    },
    {
        id:8,
        href:"###",
        icon:<IoGameController className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Chơi game"
    },
    {
        id:9,
        href:"###",
        icon:<IoSave className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Đã lưu"
    },
    {
        id:10,
        href:"###",
        icon:<IoTimerOutline className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Kỷ niệm"
    },
    {
        id:11,
        href:"###",
        icon:<IoCalendarNumber className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Sự kiện"
    },
    {
        id:12,
        href:"###",
        icon:<IoFlag className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Trang"
    }
];
const leftSideMid = [
    {
        id:1,
        href:"###",
        img:<FaReact className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Sách hay mỗi ngày"
    },
    {
        id:2,
        href:"###",
        img:<FaReact className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"ReactJS Group"
    },
    {
        id:3,
        href:"###",
        img:<FaReact className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"VueJs Group"
    },
    {
        id:4,
        href:"###",
        img:<FaReact className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Javascript"
    },
    {
        id:5,
        href:"###",
        img:<FaReact className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"Html"
    },
    {
        id:6,
        href:"###",
        img:<FaReact className="w-[30px] h-[30px] text-cyan-500"/>,
        text:"CSS"
    },
];
const newFeed =[
    {
        id:1,
        avatar:images,
        images:images,
        name:"Phúc Luân",
    },
    {
        id:2,
        avatar:images,
        images:images,
        name:"Thu Uyên",
    },
    {
        id:3,
        avatar:images,
        images:images,
        name:"Hải Long",
    },
    {
        id:4,
        avatar:images,
        images:images,
        name:"Phan Thu Hiền",
    },
    {
        id:5,
        avatar:images,
        images:images,
        name:"Huỳnh Tấn Phát",
    },
    {
        id:6,
        avatar:images,
        images:images,
        name:"Nguyễn Huệ",
    },
    {
        id:7,
        avatar:images,
        images:images,
        name:"Quang Trung",
    },
    {
        id:8,
        avatar:images,
        images:images,
        name:"Hasagi",
    },
    {
        id:9,
        avatar:images,
        images:images,
        name:"Pentakill",
    },

];
const post = [
    {
        id:1,
        avatar:images,
        name:"Nguyễn Phúc Luân",
        times:"1 ngày",
        content:[
            "content1",
            "content2",
        ],
        img:images,
        liked: 18,
        comment:120,
        share:8,
        // Who comment
        avatar_user:images,
        name_user:"Hà Tôn Quyền",
        comment_body:" ảnh này đẹp quá"
    },
    {
        id:2,
        avatar:images,
        name:"Nguyễn Phúc Luân",
        times:"1 ngày",
        content:[
            "content1",
            "content2",
        ],
        img:images,
        liked: 56,
        comment:120,
        share:8,
        // Who comment
        avatar_user:images,
        name_user:"Hà Tôn Quyền",
        comment_body:" ảnh này đẹp quá"
    },
    {
        id:3,
        avatar:images,
        name:"Nguyễn Phúc Luân",
        times:"1 ngày",
        contents:[
            "content1",
            "content2",
        ],
        img:images,
        liked: 76,
        comment:120,
        share:8,
        // Who comment
        avatar_user:images,
        name_user:"Hà Tôn Quyền",
        comment_body:" ảnh này đẹp quá"
    },
];
const activeUser =[
    {
        id:1,
        avatar:images,
        name:"Huỳnh Tông Trạch"
    },
    {
        id:2,
        avatar:images,
        name:"Nguyễn Thu Uyên"
    },
    {
        id:3,
        avatar:images,
        name:"Nguyễn Phúc Luân"
    },
    {
        id:4,
        avatar:images,
        name:"Thầy giáo Three"
    },
    {
        id:5,
        avatar:images,
        name:"Phan Tấn Trung"
    },
    {
        id:6,
        avatar:images,
        name:"Luffy Mũ Rơm"
    },
    {
        id:7,
        avatar:images,
        name:"Roronoa Zoro"
    },
    {
        id:8,
        avatar:images,
        name:"Vinsmoke Sanji"
    },
    {
        id:9,
        avatar:images,
        name:"Nami"
    },
    {
        id:10,
        avatar:images,
        name:"Nico Robin"
    },
    {
        id:11,
        avatar:images,
        name:"Jinbei"
    },
    {
        id:12,
        avatar:images,
        name:"Franky"
    },
    {
        id:13,
        avatar:images,
        name:"Brook"
    },
    {
        id:14,
        avatar:images,
        name:"Ussop"
    },
    {
        id:15,
        avatar:images,
        name:"Chopper"
    },
    {
        id:16,
        avatar:images,
        name:"Thousand Sunny"
    },
    {
        id:17,
        avatar:images,
        name:"Bon Clay"
    },
]
const messenger = [
    {
        id:1,
        avatar:images,
        name:"Shigeo Tokuda",
        message:"đây là tin nhắn",
    },
    {
        id:2,
        avatar:images,
        name:"Ronaldo",
        message:"đây là tin nhắn",
    },
    {
        id:3,
        avatar:images,
        name:"Leonel Messi",
        message:"đây là tin nhắn",
    },
    {
        id:4,
        avatar:images,
        name:"Yasouuu",
        message:"đây là tin nhắn",
    },
    {
        id:5,
        avatar:images,
        name:"Garen Demacia",
        message:"đây là tin nhắn",
    },
]
export { leftSideTop,leftSideMid,newFeed,post,activeUser,messenger }