import React from "react";
import axios from 'axios';
import './User.scss'
import { withRouter } from '../WithRouter'
class User extends React.Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res.data.data
        })
    }
    handleViewDetail = (user) => {
        this.props.navigate(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state
        return (
            <div>
                <h2>Fetch data from api users</h2>
                <ul className="list-user">
                    {listUser && listUser.length > 0
                        && listUser.map(user => <li className="info-user" key={user.id} onClick={() => this.handleViewDetail(user)}>
                            <img src={user.avatar} className="img" alt={user.first_name} />
                            <h4>{user.first_name + ' '} {user.last_name} </h4>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default withRouter(User);