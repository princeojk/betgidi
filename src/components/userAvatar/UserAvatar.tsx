import type { User } from "../../types";
import css from "./userAvatar.module.scss";
import userAvatar from "../../assets/images/user.png";

interface UserAvatarProps {
  user: User;
}
const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  return (
    <div className={css.userAvatarContainer}>
      <img src={userAvatar} alt="userAvatar" className={css.avatar} />
      <div className={css.fullName}>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
