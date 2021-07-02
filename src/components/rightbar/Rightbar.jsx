import "./rightbar.css"
export default function Rightbar(){
    return(
        <div className="rightbar">
    <div className="rightbarWrapper">
        <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png" alt="" />
            <span className="birthdayText"> <b>Evanson Njoroge</b> and <b>6 other friends</b> have their birthday today </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Friends Online</h4>
        <ul className="rightbarFriendList">
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarProfileImg" src="assets/person/3.jpg" alt="" />
                    <span className="rightbarOnline"></span>
                </div>
            </li>
        </ul>
    </div>
        </div>
    )
}