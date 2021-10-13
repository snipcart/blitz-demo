import { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { z } from "zod"
import { validateZodSchema } from "blitz"
import { Box, ButtonGroup, Button, ThemeProvider, theme } from "@chakra-ui/react"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        w={500}
        p={4}
        m="20px auto"
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
      >
        <FinalForm
          initialValues={initialValues}
          validate={validateZodSchema(schema)}
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, submitError }) => (
            <form onSubmit={handleSubmit} className="form" {...props}>
              {/* Form fields supplied as children are rendered here */}
              {children}

              {submitError && (
                <div role="alert" style={{ color: "red" }}>
                  {submitError}
                </div>
              )}

              {submitText && (
                <ButtonGroup spacing={4}>
                  <Button
                    isLoading={submitting}
                    disabled={submitting}
                    loadingText="Submitting"
                    colorScheme="teal"
                    type="submit"
                  >
                    {submitText}
                  </Button>
                </ButtonGroup>
              )}

              <style global jsx>{`
                .form > * + * {
                  margin-top: 1rem;
                }
              `}</style>
            </form>
          )}
        />
      </Box>
    </ThemeProvider>
  )
}

export default Form
