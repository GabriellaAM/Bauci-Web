import { createContext, useState } from "react"

export const ModalsContext = createContext()

const ModalsContextProvider = ({ children }) => {

   const [modalWrapperActive, setModalWrapperActive] = useState(false)
   const [editCategoryModalActive, setEditCategoryModalActive] = useState(false)
   const [deleteCategoryModalActive, setDeleteCategoryModalActive] = useState(false)
   const [deleteProductModalActive, setDeleteProductModalActive] = useState(false)

   const [toDeleteCategory, setToDeleteCategory] = useState("")
   const [toDeleteProduct, setToDeleteProduct] = useState("")

   function toggleEditCategoryModal() {
      setModalWrapperActive(prev => !prev)
      setEditCategoryModalActive(prev => !prev)
   }

   function toggleDeleteCategoryModal() {
      setModalWrapperActive(prev => !prev)
      setDeleteCategoryModalActive(prev => !prev)
   }

   function toggleDeleteProductModal() {
      setModalWrapperActive(prev => !prev)
      setDeleteProductModalActive(prev => !prev)
   }

   return (
      <ModalsContext.Provider value={{
         modalWrapperActive, 
         editCategoryModalActive, toggleEditCategoryModal,
         deleteCategoryModalActive, toggleDeleteCategoryModal,
         deleteProductModalActive, toggleDeleteProductModal,
         toDeleteCategory, setToDeleteCategory,
         toDeleteProduct, setToDeleteProduct
      }}>
         { children }
      </ModalsContext.Provider>
   )
}

export default ModalsContextProvider