import { useEffect } from "react";

const Contacts = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('2 seconds');
        }, 2000)
        return () => {
            clearTimeout(timeoutId);
        }
    }, [])

    return (
        <>
            <h2>Contacts Page</h2>

            <label htmlFor="">Title</label>
            <input type="text" /><br />
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea><br />
            <label htmlFor="">Submit</label>
            <input type="submit" value="" />

        </>
    )
};

export default Contacts;