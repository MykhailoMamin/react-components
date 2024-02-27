import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={css.item}>
      <span
        className={clsx(css.status, {
          [css.online]: isOnline,
        })}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
