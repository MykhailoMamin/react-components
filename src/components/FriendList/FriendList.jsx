import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={css.friendList}>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </ul>
    </section>
  );
}
