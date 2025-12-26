import React,{Component} from 'react';
import "./user.css";

class UserCard1 extends Component {
    render() {
        return (<>
            <div className="user-card">
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ac41f74056361.5c1faf697fd88.jpg"
                    alt="User Avatar"
                    className="user-avatar"
                />
                <h3 className="user-name">Marry Crishmis</h3>
                <button className="save-button">save</button>
            </div>
            
            </>
        );
    }
}

export default UserCard1;