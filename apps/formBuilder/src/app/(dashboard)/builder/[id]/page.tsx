// 'use client';


import React from "react";

import { FormBuilder } from "@form-builder/shared";
import { GetFormById } from "apps/formBuilder/actions/form";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("form not found");
  }
  return <FormBuilder form={form} />;
}

export default BuilderPage;