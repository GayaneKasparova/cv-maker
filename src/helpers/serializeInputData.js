 const serializeInputData = (event) => {
    return ({
        'key': event.target.id,
        'value': event.target.value,
    })
}

 export default serializeInputData