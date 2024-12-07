import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter, FaResearchgate, FaHackerrank} from 'react-icons/fa'   


const socials = [
  {icons: <FaGithub/>, path:"https://github.com/hirokr"},
  {icons: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/hirokrr/"},
  {icons: <FaResearchgate/>, path:"https://www.researchgate.net/profile/Hirok-Roy-Rahul"},
  {icons: <FaHackerrank/>, path:"https://www.hackerrank.com/profile/hirokrr"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link href={item.path} key={index} className={iconStyles}>{item.icons} </Link>
      })}
    </div>
  )
}

export default Social
