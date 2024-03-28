/* Profile */
import css from './Profile.module.css'; // css modules

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.userInfo}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statItem}>
          <span className={css.statLabel}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statLabel}>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
