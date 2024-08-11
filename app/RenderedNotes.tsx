import Buttonc from "./Buttonc";
import Buttone from "./Buttone";
import "./style.css";
import {notes} from "./notes";

export default function RenderedNotes() {
    return (
        <>
        <p>This is renderednotes page.</p>

{notes.map(d => <div className="flex w-1/4 justify-between" key={d.id}>{d.title}<div ><Buttonc id={d.id}/><Buttone id={d.id}/></div></div>)}


        </>
    )
}