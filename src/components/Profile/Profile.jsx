import css from "./Profile.module.css"

export default function Profile({ name,
  tag,
  location,
  image,
  stats
}) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listItemText}>Followers</span>
          <span className={css.score}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listItemText}>Views</span>
          <span className={css.score}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listItemText}>Likes</span>
          <span className={css.score}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}