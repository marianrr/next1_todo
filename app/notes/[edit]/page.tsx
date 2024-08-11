
import {notes} from "../../notes";
import {updatenote} from "../../actions"
export default function Page({ params }: { params: { edit: string } }) {

    return (
    <>
    <p>My Post: {params.edit}</p>
    <form action={updatenote}>
            <input className="text-gray-600" type="hidden" name="id" value={params.edit}/>
            <input className="text-gray-600" type="text" name="noteu" id="noteu"/>
            <button type="submit">edit</button>
        </form>
    </>)
  }