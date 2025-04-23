import { todoProps } from '@/types'
import Form from '../form/Form'
import Input from '../input/input'
import Button from '../button/Button'
import { FaTrash } from 'react-icons/fa'
import * as actions from "@/actions";

const DeleteTodo = ({todo}: {todo: todoProps}) => {
  return (
    <Form action={actions.deleteTodo}>
        <Input name="inputId" type="hidden" value={todo.id} placeholder={''}></Input>
        <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash />}></Button>
    </Form>
  )
}

export default DeleteTodo
