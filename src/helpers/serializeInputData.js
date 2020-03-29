 const serializeInputData = (event) => {
     const eventTarget = event.target;
     let value = eventTarget.value;

     if (eventTarget.type === 'file') {
         value = eventTarget.files[0] ? URL.createObjectURL(eventTarget.files[0]) : ''
     }

    return ({
        'key': eventTarget.id,
        'value': value,
    })
}

 export default serializeInputData