
export default function UncontrolledForm() {
    return (
        <>
            <h1>Uncontrolled From</h1>

            <form >
                <div>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div>
                    <button>Register</button>
                </div>
            </form>
        </>
    );
};