import "./post.css"
import {MoreVert} from '@material-ui/icons';

export default function Post() {
    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpg" alt=""/>
                        <span className="postUsername">John Maura</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                     <div className="postTopRight">
                         <MoreVert/>
                     </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! check this out:)</span>
                    <img className="postImg" src="/assets/post/post1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <img className="heartIcon" src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            8 comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
