import { useEffect, useState } from "react"
import axios from "axios"
import RepoItem from "./RepoItem"

const Repo = () => {
  //component state handlers
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  /**
   * @desc functions that is handles fetching of data from the github api
   * @returns returns an object of the top 30 repos
   */
  const fetchRepos = () => {
    setLoading(true)
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&
        sort=stars&order=desc`
      )
      .then((res) =>
        res.data.items.map((repoDetails) => ({
          name: `${repoDetails.name}`,
          avatar: `${repoDetails.owner.avatar_url}`,
          description: `${repoDetails.description}`,
          homepage: `${repoDetails.homepage}`,
          open_issues: `${repoDetails.open_issues}`,
          stargazers_count: `${repoDetails.stargazers_count}`,
        }))
      )
      .then((repo) => {
        setRepos(repo)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  // const fetchNextUser = () => {
  //   setNextPageNumber(nextPageNumber + 1)
  // }
  //life cycle method that is called on every page reload
  useEffect(() => {
    fetchRepos()
  }, [repos])
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        repos.map((repo) => {
          const {
            name,
            avatar,
            description,
            homepage,
            open_issues,
            stargazers_count,
          } = repo
          return (
            <RepoItem
              name={name}
              avatar={avatar}
              description={description}
              homepage={homepage}
              issues={open_issues}
              stars={stargazers_count}
            />
          )
        })
      )}
    </>
  )
}

export default Repo
