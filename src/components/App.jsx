import user from './dataBox/user.json';
import data from './dataBox/data.json';
import friends from './dataBox/friends.json';
import transactions from './dataBox/transactions.json';
import './index.css';
import clsx from 'clsx';
import css from './module.css';

console.log(css);
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsLikes={user.stats.likes}
        statsViews={user.stats.views}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

const TransactionHistory = ({ items }) => {
  const listItems = items.map(transaction => (
    <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  ));
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
};

const FriendList = ({ friends }) => {
  const listItems = friends.map(friend => (
    <li className="item" key={friend.id}>
      <span
        className={clsx({
          [css.isOnline]: friend.isOnline,
          [css.isOffline]: friend.isOnline,
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

const Statistics = ({ stats }) => {
  let title = 'Upload stats';
  const listItems = stats.map(statComponent => (
    <li key={statComponent.id} className="item">
      <span className="label">
        {statComponent.label}
        <br />
      </span>
      <span className="percentage">{statComponent.percentage}</span>
    </li>
  ));

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{listItems}</ul>
    </section>
  );
};

const Profile = ({
  avatar,
  username,
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={username} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{statsFollowers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{statsViews}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{statsLikes}</span>
      </li>
    </ul>
  </div>
);
