import { todoProps } from "@/types";
import Button from "../button/Button"
import Form from "../form/Form"
import Input from "../input/input"
import * as actions from "@/actions";
import { FaCheck } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden" placeholder={""}></Input>
        <Button text={<FaCheck />} type="submit" actionButton bgColor={todo.isCompleted? 'bg-green-400' : 'bg-blue-500'}></Button>
    </Form>
  )
}

export default ChangeTodo
