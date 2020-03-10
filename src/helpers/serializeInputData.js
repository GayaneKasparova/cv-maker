 const serializeInputData = (event, dataType) => {

    return ({
        'key': event.target.id,
        'value': event.target.value,
        'dataType': dataType
    })
}

 export default serializeInputData