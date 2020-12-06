import * as axios from 'axios'

export const employeesAPI = {
    getEmployees() {
        return axios.get('http://dummy.restapiexample.com/api/v1/employees');
    }
}
