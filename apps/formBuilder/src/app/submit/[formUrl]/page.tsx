import { GetFormContentByUrl } from "apps/formBuilder/actions/form";
import { FormElementInstance } from "@form-builder/shared";
import {FormSubmitComponent} from "@form-builder/shared";
import React from "react";

async function SubmitPage({
  params,
}: {
  params: {
    formUrl: string;
  };
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
}

export default SubmitPage;