"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { FormElementInstance } from '@form-builder/shared';
import { useSearchParams } from "next/navigation";

type DesignerContextType = {
  elements: FormElementInstance[];
  setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;

  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;

  updateElement: (id: string, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export function DesignerContextProvider({ children }: { children: ReactNode }) {
  const [mounted,setMounted] = useState(false);
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);

  const searchParams = useSearchParams();
  const GAID = searchParams.get('gaid');

  useEffect(()=>{
    if(GAID){
      alert('GAID')
      alert(GAID)
    }
  },[GAID])

  useEffect(()=>{
    setMounted(true)
  },[])
  
  if(!mounted)return null;



  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const updateElement = (id: string, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        setElements,
        addElement,
        removeElement,

        selectedElement,
        setSelectedElement,

        updateElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}