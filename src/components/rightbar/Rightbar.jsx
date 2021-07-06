import "./rightbar.css";
import { Users } from '../../dummyData';
import Online from "../online/Online";
export default function Rightbar({ profile }) {
    const HomeRightbar = () =>{
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"> <b>Evanson Njoroge</b> and <b>6 other friends</b> have their birthday today </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Friends Online</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Nairobi</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Voi</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Walter white</span>
                </div>
                 <div className="rightbarFollowing">
                    <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Walter white</span>
                </div>
                 <div className="rightbarFollowing">
                    <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Walter white</span>
                </div>
                 <div className="rightbarFollowing">
                    <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Walter white</span>
                </div>
                 <div className="rightbarFollowing">
                    <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Walter white</span>
                </div>
                 <div className="rightbarFollowing">
                    <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Walter white</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    );
}