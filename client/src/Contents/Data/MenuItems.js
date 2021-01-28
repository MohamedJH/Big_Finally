import { faChartArea,faUsers,faListAlt,faTrophy,faUserShield, faShieldAlt, faExchangeAlt, faQuestionCircle} from "@fortawesome/free-solid-svg-icons"


import Question from "../../Components/Admin Component/Views/Question Component/Question"
import Quizzes from "../../Components/Admin Component/Views/Quizzes Component/Quizzes"
import Adminprofil from "../../Components/Admin Component/Views/Admin Profil Component/Adminprofil"
import Signup from "../../Components/Admin Component/Views/Sign Up Component/Signup"



export  const itemslist =[
    {
        title:{
            icon:faChartArea,
            name:"Dashboard"
        },
        path: "/dashboard"

    },
    {
        title:{
            icon:faUsers,
            name:'Users'
        },
        path: "/users"
    },
    {
        title:{
            icon:faQuestionCircle,
            name:'Question'
        },
        path: "/questions",
        component: ()=> <Question/>      
    },
    {
        title:{
            icon:faListAlt,
            name:'Quizzes'
        },
        path: "/quizzes",
        component: ()=> <Quizzes/>       
    },
    {
        title:{
            icon:faTrophy,
            name:"Classement"
        },
        path: "/leaderboard"   
    },
    {
        title:{
            icon:faUserShield,
            name:"AdminProfil"
        },
        path: "/AdminProfil",   
        component: ()=> <Adminprofil/>     
    },
    {
        title:{
            icon:faExchangeAlt,
            name:"Sign In"
        },
        path: "/SignIn",
        exact: true
    },
    {
        title:{
            icon:faShieldAlt,
            name:"Sign Up"
        },
        path: "/SignUp",
        component: ()=> <Signup/>
        
    }
    
]