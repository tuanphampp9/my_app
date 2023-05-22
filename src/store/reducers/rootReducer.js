const initState = {
    courses: [
        {
            id: 1,
            name: 'Javascript'
        },
        {
            id: 2,
            name: 'ReactJS'
        },
        {
            id: 3,
            name: 'VueJS'
        },
        {
            id: 4,
            name: 'HTML/CSS'
        }
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'delete_course':
            let courseInfo = action.payload
            let coursesDelete = state.courses.filter((course) => course.id !== courseInfo.id)
            console.log(coursesDelete);
            return {
                ...state,
                courses: coursesDelete
            };
        case 'create_course':
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer