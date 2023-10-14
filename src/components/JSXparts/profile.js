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

export default Profile;
