export default function Todos() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                <tr class="todo is-completed">
                    <td>Give dog a bath</td>
                    <td>Complete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

            </tbody>
        </table>
    )
};