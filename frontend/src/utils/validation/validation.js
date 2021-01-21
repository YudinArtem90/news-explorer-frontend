import * as yup from 'yup';

const password = (passwordCardRefValue) => {
    let schema = yup.object({
        password: yup.string().min(8).max(30).matches(/^[A-Za-z0-9]+$/g).required()
      });

    return schema.validate({ 
        password: passwordCardRefValue
    });
}

const email = (emailCardRefValue) => {
    let schema = yup.object({
        email: yup.string().email().required()
      });

    return schema.validate({ 
        email: emailCardRefValue
    });
}

const name = (nameCardRefValue) => {
    let schema = yup.object({
        name : yup.string().min(2).max(30).required()
        });

    return schema.validate({ 
        name: nameCardRefValue
    });
}

export {
    password,
    email,
    name
}