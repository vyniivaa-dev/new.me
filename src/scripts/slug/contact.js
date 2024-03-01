import { Header } from "../../components/header"
import { showProfile } from "../../components/hero-profile"
import projects from "../../components/projects"
import { sidebar, toggleTheme } from "../../helpers/header"

(document.querySelector('[data-image]') || {}).innerHTML = showProfile()
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}

document.addEventListener('DomContentLoaded', projects())