function generatepassword(lenght, includelowercase, includeuppercase, includenumber, inculdesymbol) {
    const lowercasechar = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    const numberchat = "0123456789";
    const symbolchar = "@#%$&+";
    let allowedchars = "";
    let password = "";

    allowedchars += includelowercase ? lowercasechar : "";
    allowedchars += includeuppercase ? uppercasechar : "";
    allowedchars += includenumber ? numberchat : "";
    allowedchars += inculdesymbol ? symbolchar : "";

    if (lenght <= 0) {
        return `(password lenght must be ae least 1)`
    }
    if (allowedchars.length === 0) {
        return `(At least 1 set of character need to be selected)`
    }
     for (let i = 0; i < lenght; i++) {
        const randonindexx = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randonindexx];
        
     }

    return password;

}


const passwordlenght = 12;
const includelowercase = true;
const includeuppercase = true
const includenumber = true;
const inculdesymbol = true;

let password = generatepassword(passwordlenght,
    includelowercase,
    includeuppercase,
    includenumber,
    inculdesymbol)

console.log(`Generated password: ${password}`);