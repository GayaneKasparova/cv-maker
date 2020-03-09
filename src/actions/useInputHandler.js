import { useDispatch } from "react-redux";

const useInputHandler = ({event}) => {
    const dispatch = useDispatch();
    const dataType = event.target.closest('form').getAttribute('datatype');
    dispatch({
        type: 'STORE_INPUT_VALUE',
        key: event.target.id,
        value: event.target.value,
        dataType: dataType
    })
    console.log(dataType)
    return dataType
}

export default useInputHandler