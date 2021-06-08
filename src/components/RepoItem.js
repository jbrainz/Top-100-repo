import "./repo-item.css"
const RepoItem = ({ avatar, name, description, stars, issues, homepage }) => {
  return (
    <div className="columns buttom">
      <figure class="image is-128x128">
        <img src={avatar} alt={name} />
      </figure>
      <div className="column content row">
        <h2 style={{ textAlign: "left" }}>{name}</h2>
        <h4>{description}</h4> <a href={homepage}>{homepage}</a>
        <div style={{ marginRight: "20px" }} className="columns flex">
          <div className="column">
            <strong>Stars :{stars}</strong>
          </div>
          <div className="column ">
            <strong>issues :{issues}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
