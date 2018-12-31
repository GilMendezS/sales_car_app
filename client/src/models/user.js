export default class User{
    constructor(_id,
        name,
        lastname,
        email,
        password,
        phone,
        address){
            this._id = _id;
            this.name = name;
            this.lastname = lastname;
            this.email = email;
            this.password = password;
            this.phone = phone;
            this.address = address;
        }
}