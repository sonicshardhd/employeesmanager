const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    employeeProfile: {}
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                employeeProfile: action.employeeProfile
            }
    }
    return state;
}

export const setEmployeeProfile = employeeProfile => ({ type: SET_PROFILE, employeeProfile });

export default profileReducer;