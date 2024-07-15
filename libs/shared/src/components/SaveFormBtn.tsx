'use client';

import React, { useTransition } from "react";
import { Button } from "@form-builder/ui-components";
import { HiSaveAs } from "react-icons/hi";
import {useDesigner} from "@form-builder/hooks";
import { UpdateFormContent } from "apps/formBuilder/actions/form";
import { toast } from "@form-builder/ui-components";
import { FaSpinner } from "react-icons/fa";

export function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}