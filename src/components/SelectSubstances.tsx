/* eslint-disable no-unused-vars */
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import SubstanceList from "./SubstanceList"
import { useState } from "react"

const SelectSubstances = () => {
  const [open, setOpen] = useState(false)

  const handleOnOpenSubstanceSelect = () => {
    setOpen(true)
  }

  return (
    <>
      <button onClick={handleOnOpenSubstanceSelect}
      className="fixed p-5 text-white rounded-lg shadow-lg bottom-3 left-3 right-3 bg-[#04294F]">
        SELECT SUBSTANCES TO START
      </button>
      <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            <SubstanceList />
          </div>
          <DrawerFooter>
            {/* <button>Submit</button> */}
            <DrawerClose className="bg-[#00C25A] rounded-md p-4 w-full text-white">
              SEE INTERACTIONS
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>

  )
}



export default SelectSubstances


