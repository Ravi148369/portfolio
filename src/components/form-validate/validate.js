export default function validate(formData) {
    const formError = {}
    if(formData.hasOwnProperty('email')) {
        if(formData.email.trim() === '') {
            formError.email = "Email is required !!"
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            formError.email = "Please enter a valid email"
        }
    }
    if(formData.hasOwnProperty('name') && formData.name.trim() === '') {
        formError.name = "Name is required !!"
    }
    if(formData.hasOwnProperty('subject') && formData.subject.trim() === '') {
        formError.subject = "subject is required !!"
    }
    if(formData.hasOwnProperty('message') && formData.message.trim() === '') {
        formError.message = "message is required !!"
    }
    return formError
}