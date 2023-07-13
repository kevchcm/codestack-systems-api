<div x-data="fetch" x-init="getUsers">
    <div x-show="users">
        <table class="m-auto">
            <thead class="bg-secondary text-purple font-ubuntu">
                <tr>
                    <th class="p-4">Name</th>
                    <th class="p-4">Email</th>
                    <th class="p-4">Gender</th>
                    <th class="p-4">Status</th>
                </tr>
            </thead>
            <tbody class="font-raleway">
                <template x-for="user in users" :key="user.id">
                    <tr
                        class="border-b-[1px] border-purple hover:bg-purple hover:text-gray hover:font-semibold"
                        x-show="user.status === 'active'"
                    >
                        <td class="p-4" x-text="user.name"></td>
                        <td class="p-4" x-text="user.email"></td>
                        <td class="p-4" x-text="user.gender"></td>
                        <td class="p-4" x-text="user.status"></td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>