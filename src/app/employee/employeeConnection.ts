export class EmployeeConnection {

    _callOnSharesData:string;

  
    constructor() {
        this._callOnSharesData = 'api'
     }

    public getCallOnSharesData() {
        return this._callOnSharesData;
    }
  }