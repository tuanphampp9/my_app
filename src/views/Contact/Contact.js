import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
class Contact extends React.Component {
    state = {
        courseInput: ''
    }
    handleDeleteCourse = (course) => {
        this.props.deleteCourseRedux(course);
    }
    handleOnChangeInputCourse = (e) => {
        this.setState({
            courseInput: e.target.value
        })
    }
    handleCreateCourse = (newCourse) => {

        let data = {
            id: Math.floor(Math.random() * 1000),
            name: newCourse
        }
        if (this.state.courseInput === '') {
            toast.error('Please enter your new course!!!')
            return;
        }
        this.props.createCourseRedux(data)
        this.setState({
            courseInput: ''
        })
    }
    render() {
        let listCourse = this.props.dataRedux;
        console.log(this.props);
        return (
            <div>
                <h3>Learn Redux</h3>
                <div className="box-add-course">
                    <input style={{
                        margin: '0px 10px', borderRadius: '3px', padding: '5px 10px', fontSize: '17px',
                    }}
                        placeholder="Enter new course..."
                        value={this.state.courseInput}
                        onChange={(e) => this.handleOnChangeInputCourse(e)} />
                    <button onClick={() => this.handleCreateCourse(this.state.courseInput)}>Add</button>
                </div>
                {listCourse && listCourse.length > 0 && listCourse.map(course => {
                    return <p key={course.id}>
                        {course.name}
                        <button style={{ margin: '0px 15px' }}
                            onClick={() => this.handleDeleteCourse(course)}>&times;</button>
                    </p>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.courses }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourseRedux: (course) => dispatch({
            type: 'delete_course',
            payload: course
        }),
        createCourseRedux: (newCourse) => dispatch({
            type: 'create_course',
            payload: newCourse
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact) 