import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './User.scss'
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let { id } = this.props.params;
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }

    render() {
        let infoUser = this.state.user;
        const isEmptyObject = Object.keys(infoUser).length === 0
        return (
            <div className="info-user">
                {isEmptyObject === false &&
                    <>
                        <p>Email: {infoUser.email}</p>
                        <p>First Name: {infoUser.first_name}</p>
                        <p>Last Name: {infoUser.last_name}</p>
                        <img src={infoUser.avatar} alt={infoUser.first_name} />
                    </>
                }
                <br />
                <Link className="btn-link" to='/user'>Back List user</Link>
            </div>
        );
    }
}

export default withParams(DetailUser);