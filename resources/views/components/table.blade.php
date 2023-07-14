<div x-data="fetch" x-init="getUsers">
    <div class="relative overflow-x-auto max-w-fit m-auto flex flex-col align-center" x-show="users">
        <table class="m-auto">
            <thead class="bg-secondary text-purple font-ubuntu">
                <tr>
                    <th class="p-4 cursor-pointer" @click="sort('name')">
                        Name
                        {{--<x-icons name="arrow"/>--}}
                    </th>
                    <th class="p-4 cursor-pointer" @click="sort('email')">
                        Email
                        {{--<x-icons name="arrow"/>--}}
                    </th>
                    <th class="p-4 cursor-pointer" @click="sort('gender')">
                        Gender
                        {{--<x-icons name="arrow"/>--}}
                    </th>
                    <th class="p-4 cursor-pointer">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody class="font-raleway">
                <template x-for="user in paginatedUsers" :key="user.id">
                    <tr class="border-b-[1px] border-purple hover:bg-purple hover:text-gray hover:font-semibold">
                        <td class="p-4" x-text="user.name"></td>
                        <td class="p-4" x-text="user.email"></td>
                        <td class="p-4" x-text="user.gender"></td>
                        <td class="p-4" x-text="user.status"></td>
                    </tr>
                </template>
            </tbody>
        </table>
        
        <div class="flex justify-between mt-8">
            <button class="bg-purple text-white py-[18px] px-[35px] transition-all rounded-lg border-[1px] border-purple hover:bg-gray hover:text-black" @click="previousPage">Previous</button>
            <button class="bg-purple text-white py-[18px] px-[35px] transition-all rounded-lg border-[1px] border-purple hover:bg-gray hover:text-black" @click="nextPage">Next</button>
        </div>
    </div>
</div>