import './bootstrap';

import Alpine from 'alpinejs'

window.Alpine = Alpine

let apiUrl = import.meta.env.VITE_API_URL

document.addEventListener('alpine:init', () => {
    Alpine.data('fetch', () => ({
        users: null as null | object,
        sortedUsers : null as null | object,
        sortColumn: null as null | string,
        sortAsc: false as boolean,
        perPage: 3 as number,
        currentPage: 1 as number,
        search: '' as string,
        getUsers(): null | object {
            //fetch users from API route
            axios.get(apiUrl)
                .then((response) => {
                    this.users = response.data.filter(user => user.status === 'active')
                })
                .catch((error) => {
                    this.users = null
                })
        },
        sort(column: string | null): number {
            //sort by column when clicked on
            if(this.sortColumn === column) this.sortAsc = !this.sortAsc;
            this.sortColumn = column;

            this.users.sort((a: object, b: object): number => {
                if(a[this.sortColumn] < b[this.sortColumn]) return this.sortAsc ? 1 : -1;

                if(a[this.sortColumn] > b[this.sortColumn]) return this.sortAsc ? -1 : 1;

                return 0;
            });
        },
        nextPage(): number {
            if((this.currentPage * this.perPage) < this.users.length){
                this.currentPage++
            }
        },
        previousPage(): number {
            if(this.currentPage > 1){
                this.currentPage--
            }
        },
        get paginatedUsers(): boolean | object {
            if(this.users){
                return this.users.filter((user, index) => {
                    let start = (this.currentPage - 1) * this.perPage
                    let end = this.currentPage * this.perPage

                    if(index >= start && index < end) return true
                })
            } else {
                return []
            }
        },
        filter(search) {

            const plainObject = JSON.parse(JSON.stringify(this.users));

            if(search == ''){
                this.users = this.getUsers()
            }else{
                this.users = plainObject.filter(item => {
                    let found = false;
                    Object.keys(item).forEach(key => {
                        if (item[key] && item[key].indexOf && item[key].indexOf(search) > -1) {
                            found = true;
                        }
                    });
                    return found;
                });
            }
        }
    }))
})

Alpine.start()