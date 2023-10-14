import clsx from 'clsx';
import css from '../styles/friends.module.scss';

const FriendList = ({ friends }) => {
  const listItems = friends.map(friend => (
    <li className="item" key={friend.id}>
      <span
        className={clsx({
          [css.isOnline]: friend.isOnline,
          [css.isOffline]: !friend.isOnline,
        })}
      />
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width={48}
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
  return <ul className="friend-list">{listItems}</ul>;
};

export default FriendList;
