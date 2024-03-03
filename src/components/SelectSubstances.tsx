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
      <button onClick={handleOnOpenSubstanceSelect}>OPEN</button>
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
            <DrawerClose>
              X
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>

  )
}



export default SelectSubstances


