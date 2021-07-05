import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import React from './profile.css'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                       <img className="profileCoverImg" src="assets/person/3.jpg" alt="" />
                       <img className="profileUserImg" src="assets/post/post7.jpg" alt="" /> 
                       </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">John Maura</h4>
                        <span className="profileInfoDesc">Hello my guys!</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    )
}
