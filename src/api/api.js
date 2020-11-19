import * as axios from 'axios'

export const employeesAPI = {
    async getEmployees() {
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
        return response.data;
    }
}
