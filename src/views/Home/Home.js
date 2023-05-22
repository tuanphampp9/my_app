import React from 'react'
import car from '../../assets/images/car.png'
class Home extends React.Component {

    render() {
        return (
            <>
                <h2>Home page with ReacJS</h2>
                <img style={{ width: '50%' }} src={car} alt='car red' />
            </>
        )
    }
}
export default Home