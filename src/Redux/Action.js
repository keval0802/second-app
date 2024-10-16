export const userSubmit = (data) => {
    console.log(data, "ACTION");
    return {
        type: "USER_SUBMIT",
        payload: data
    }
}