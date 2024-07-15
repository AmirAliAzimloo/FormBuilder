"use client";

import { Form } from "@prisma/client";

export const FormBuilder = ({form}:{form: Form}) => {
  return (
    <div>
      FormBuilder : {form.name}
    </div>
  )
}

