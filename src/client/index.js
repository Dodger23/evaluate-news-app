import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

let form = document.getElementById('form')
form.addEventListener('submit' ,(event) => {
    return handleSubmit(event)
})
export {
    checkForName,
    handleSubmit
}
