import css from './Users.module.css';

export default function User({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profilCard}>
      <div class="description">
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.statusList}>
        <li className={css.statusItem}>
          <span className={css.statusDescription}>Followers</span>
          <span className={css.statusNumber}> {followers}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusDescription}>Views</span>
          <span className={css.statusNumber}> {views}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusDescription}>Likes</span>
          <span className={css.statusNumber}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}
