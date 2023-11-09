import { useRef } from "react"
import Input from "./Input"
export default function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const enteredDate = dueDate.current.value;
        onAdd({
            title:enteredTitle,
            description:enteredDesc,
            dueDate:enteredDate
        })
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-5 my-4">
            <li><button className="text-stone-800 hover:text-stone-900">Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
}