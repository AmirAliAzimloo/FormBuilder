'use client';


import {useDesigner} from "@form-builder/hooks";
import {FormelementsSidebar} from "./FormelementsSidebar";
import {PropertiesFormSidebar} from "./PropertiesFormSidebar";

export function DesignerSidebar() {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {!selectedElement && <FormelementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
    </aside>
  );
}