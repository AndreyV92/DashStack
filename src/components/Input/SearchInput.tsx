import React, { useState } from "react";
import cls from "./SearchInput.module.scss";
import { CiSearch } from "react-icons/ci";
import Input from "../../shared/ui/components/Input/Input";

const SearchInput: React.FC = () => {
const [value, setValue] = useState('')

const handleChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setValue(e.target.value)
}

  return (
    <>
      <CiSearch className={cls.searchIcon} />
      <Input classNames={[cls.inputStyle]} value={value} onChange={() => handleChangeInputValue} type="search" placeholder="Search" />
    </>
  );
};

export default SearchInput;
