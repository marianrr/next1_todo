import FormNotes from "../FormNotes";
import RenderedNotes from "../RenderedNotes";

export default function Page() {
    return (
        <>
        <div className="flex flex-col items-center w-screen">
        <p>This is the notes page</p>
        <FormNotes/>
        <RenderedNotes/>
        </div>
        </>
    )
}