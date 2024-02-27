import User from './Users/User';
import users from './Data/user.json';

import Statistic from './Statistics/Statistics';
import data from './Data/data.json';

import FriendList from './FriendList/FriendList';
import friends from './Data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './Data/transactions.json';

export default function App() {
  return (
    <div>
      <User
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />

      <Statistic data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
