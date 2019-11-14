"use strict";
var Register = (function () {
    function Register(username, password, email, address) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (address === void 0) { address = ''; }
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
    }
    return Register;
}());
exports.Register = Register;
//# sourceMappingURL=Register.js.map