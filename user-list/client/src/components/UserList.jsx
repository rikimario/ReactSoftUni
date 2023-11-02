import Search from "./Search.jsx";
import UserListTable from "./UserListTable.jsx";


export default function UserList() {
    return (

        <section class="card users-container">
            <Search />

            <UserListTable />
        </section>


    );
};