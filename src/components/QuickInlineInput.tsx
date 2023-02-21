import { useState } from "react"

type propObject = {
	placeholder? : string,
	name? : string,
	submitTodoForm? : () => true | false
}

const QuickInlineInput = (props :  propObject) : JSX.Element => {

	const [newTodo,setNewTodo] = useState<string | null>()

	const addTodo = () => {

	}

	return(
		<>
		<form onSubmit={props.submitTodoForm} action="">

			<div className="p-2
			border rounded-lg flex max-w-lg ">
					<input type="text" name="todo" id="todo"
					
					className="rounded-l-lg border-2 border-gray-200 outline-none focus:ring-0 focus:border-green-300 w-10/12 placeholder:text-gray-400"
					placeholder={props.placeholder ?? "New todo..."} />

					<button type="button"
					className="w-2/12 py-2 border-none text-gray-900 bg-green-300 rounded-r-lg hover:font-bold"
						>
						Save
					</button>
			</div>
		</form>
		</>
	)

}



export default QuickInlineInput