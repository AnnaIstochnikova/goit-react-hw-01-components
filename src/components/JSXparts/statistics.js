const Statistics = ({ stats }) => {
  let title = 'Upload stats';

  const listItems = stats.map(statComponent => {
    let randomNumber = Math.floor(Math.random() * 360);
    return (
      <li
        key={statComponent.id}
        className="item"
        style={{
          backgroundColor: `hsl(${randomNumber}, 50%,50%)`,
        }}
      >
        <span className="label">
          {statComponent.label}
          <br />
        </span>
        <span className="percentage">{statComponent.percentage}%</span>
      </li>
    );
  });

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{listItems}</ul>
    </section>
  );
};

export default Statistics;

//listItem.forEach(el=>el.style.backgroundColor = `hsl(${randomNumber}, 100%, 50%)`;)
