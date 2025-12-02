// import React from 'react'

const CategoryButton = ({ label, isSelected, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
        isSelected
          ? "bg-primary1 text-neutral1 border-primary1"
          : "bg-white text-text1 border-neutral2 hover:border-primary2 hover:text-primary2"
      }`}
    >
      {label}
    </button>
  )
}

export default CategoryButton

