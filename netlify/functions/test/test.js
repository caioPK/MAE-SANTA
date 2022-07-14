const axios = require('axios');

exports.handler = async (event, context, callback) => {
    try {
        console.log('-------------');
        const response = await axios.post('https://mnh51cvt0m.execute-api.sa-east-1.amazonaws.com/prod/mae-santa',
            event.body
        );
        console.log(event.body);
        console.log(response);
        console.log('-------------');
        console.log(response.data);
        if (response.data.statusCode === 500) throw ('MSG COM FORMATO INVÁLIDO')
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                data: `Test data added successfully`
            })
        })
    } catch (error) {
        console.error(error);
        return callback(null, {
            statusCode: 501,
            body: JSON.stringify({
                data: `Erro no envio`
            })
        })
    }
}