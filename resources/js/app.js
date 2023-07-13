import './bootstrap';

import Alpine from 'alpinejs'

window.Alpine = Alpine

let apiUrl = import.meta.env.VITE_API_URL

document.addEventListener('alpine:init', () => {
    Alpine.data('fetch', () => ({
        users: null,
        getUsers() {
            axios.get(apiUrl)
                .then( (response) => {
                    this.users = response.data
                })
                .catch((error) => {
                    this.users = null
                })
        }
    }))
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Alpine.start()