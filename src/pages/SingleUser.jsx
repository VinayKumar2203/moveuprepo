import { useParams } from "react-router-dom"

const SingleUser = () => {
    const {user_ID}=useParams;
    console.log(user_ID)
  return (
    <div>
        <h1>SingleSERVICE {user_ID}</h1>
    </div>
  )
}

export default SingleUser
