"use client";

import { useContext } from "react";
import { DesignerContext } from '@form-builder/contexts';

export function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }

  return context;
}