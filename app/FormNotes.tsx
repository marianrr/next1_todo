import {createnote} from "./actions";
export default function FormNotes() {



    return (

        <>
        <p>This is formnotes page.</p>
        <form action={createnote}>
            <input className="text-gray-600" type="text" name="note" id="note" placeholder="create note..." />
            <button type="submit">click</button>
        </form>
        </>
    )
}