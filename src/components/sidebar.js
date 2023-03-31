import "../styles/sidebar.css";
const Sidebar = () => {
    let links=[
        {image:"/icons/home-outline.svg",link:"DASHBOARD"},
        {image:"/icons/cap.png",link:"KNOWLEDGE"},
        {image:"/icons/pep.png",link:"MEMBERS"},
        {image:"/icons/tem.png",link:"TEAMS"},
        {image:"/icons/fold.png",link:"VAULT"},
        {image:"/icons/chat.png",link:"CHAT"},
      

    ]
    return ( 
        <div className="Sidebar">

            <div className="sidebarLogo">
                <h1>Remote SalesFule</h1>
            </div>
            <div className="sidebarLinks">
            <ul>
            {links.map((data)=>{
                        return(
                            <li><img src={data.image}  width='25px' alt=""/><a href="#">{data.link}</a></li>
                        )
                    })}
            </ul>
           </div>
        </div>

     );
}
 
export default Sidebar;