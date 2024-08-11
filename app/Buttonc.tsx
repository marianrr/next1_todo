"use client";
import {deletenote} from "./actions";
export default function Buttonc({id}) {

return <span onClick={() => deletenote(id)} className="material-symbols-outlined">delete</span>
}