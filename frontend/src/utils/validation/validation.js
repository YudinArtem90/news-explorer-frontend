const password = (passwordCardRefValue) => {
    return new Promise(function(resolve, reject) {
        const regex = /[0-9a-zA-Z!@#$%^&*]{8,}/g;
        const usersPassword = passwordCardRefValue.match(regex);

        if(usersPassword !== null){
            resolve(true);
        }else{
            reject();
        }
    });
}

const email = (emailCardRefValue) => {
    return new Promise(function(resolve, reject) {
        const regex = /[a-zA-Z0-9/./-/_]+@[a-zA-Z0-9/.]+(\.[a-zA-Z])/g;
        const usersEmail = emailCardRefValue.match(regex);

        if(usersEmail !== null){
            resolve(true);
        }else{
            reject();
        }
    });
}

const name = (nameCardRefValue) => {
    return new Promise(function(resolve, reject) {
        const regex = /^([a-zA-Z]{2,30}|[а-яёА-ЯЁ]{2,30})+$/g;
        const usersName = nameCardRefValue.match(regex);

        if(usersName !== null){
            resolve(true);
        }else{
            reject();
        }
    });
}

export {
    password,
    email,
    name
}