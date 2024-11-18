import crypto from 'crypto'
import moment from 'moment'

function GenerateEmployeeId(departmentCode) {
    const todayDate = moment().format('YYYYMMDD');  
    const randomStr = crypto.randomBytes(3).toString('hex').toUpperCase();  
    const employeeId = `${departmentCode.toUpperCase()}${todayDate}${randomStr}`;  
    return employeeId;
}
  
export default GenerateEmployeeId;