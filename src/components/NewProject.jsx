import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal"
export default function NewProject({ onAdd,onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const enteredDate = dueDate.current.value;

        if (
            enteredTitle.trim() === "" ||
            enteredDesc.trim() === "" ||
            enteredDate.trim() === ""
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDate,
        });
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okey">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-xl font-bold text-stone-600 my-4">Please provide a value for every input value</p>
        </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-5 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-900" onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}
