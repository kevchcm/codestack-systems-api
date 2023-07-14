import './bootstrap';

import Alpine from 'alpinejs'

window.Alpine = Alpine

let apiUrl = import.meta.env.VITE_API_URL

document.addEventListener('alpine:init', () => {
    Alpine.data('fetch', () => ({
        users: null,
        sortColumn: null,
        sortAsc: false,
        perPage: 3,
        currentPage: 1,
        getUsers() {
            //fetch users from API route
            axios.get(apiUrl)
                .then( (response) => {
                    this.users = response.data.filter(user => user.status === 'active')
                })
                .catch((error) => {
                    this.users = null
                })
        },
        sort(column) {
            //sort by column when clicked on
            if(this.sortColumn === column) this.sortAsc = !this.sortAsc;
            this.sortColumn = column;
            this.users.sort((a, b) => {
                if(a[this.sortColumn] < b[this.sortColumn]) return this.sortAsc ? 1: -1;
                if(a[this.sortColumn] > b[this.sortColumn]) return this.sortAsc ? -1: 1;
                return 0;
            });
        },
        nextPage() {
            if((this.currentPage * this.perPage) < this.users.length){
                this.currentPage++
            }
        },
        previousPage() {
            if(this.currentPage > 1){
                this.currentPage--
            }
        },
        get paginatedUsers() {
            if(this.users){
                return this.users.filter((user, index)=>{
                    let start = (this.currentPage - 1) * this.perPage
                    let end = this.currentPage * this.perPage

                    if(index >= start && index < end) return true
                })
            } else {
                return []
            }
        }
    }))
})

Alpine.start()