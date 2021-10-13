import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function ProductForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
      <LabeledTextField name="price" label="Price" placeholder="Price" type="number" />
      <LabeledTextField name="description" label="Description" placeholder="Description" />
      <LabeledTextField name="imageName" label="Image" placeholder="Image" />
    </Form>
  )
}
