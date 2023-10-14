import user from './JSONdata/user.json';
import data from './JSONdata/data.json';
import friends from './JSONdata/friends.json';
import transactions from './JSONdata/transactions.json';

import './index.scss';

import TransactionHistory from './JSXparts/transaction-history';
import Profile from './JSXparts/profile.js';
import FriendList from './JSXparts/friends.js';
import Statistics from './JSXparts/statistics.js';

export const App = () => {
  return (
    <>
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
    </>
  );
};
