"use client";
import {editnote} from "./actions";
export default function Buttonc({id}) {

return <span onClick={() => editnote(id)} className="material-symbols-outlined">edit</span>
}