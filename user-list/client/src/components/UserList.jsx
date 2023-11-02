import Search from "./Search.jsx";
import UserListTable from "./UserListTable.jsx";


export default function UserList() {
    return (

        <section className="card users-container">
            <Search />

            <UserListTable />

            <button className="btn-add btn">Add new user</button>

        </section>


    );
};