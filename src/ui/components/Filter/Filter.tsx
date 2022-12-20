import React from "react";
import { Input } from "./Filter.styles";

interface FilterProps {
  onValueChange: (value: string) => void;
}

const Filter = ({ onValueChange }: FilterProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onValueChange(value);
  };

  return (
    <div>
      <Input
        type="text"
        id="filter"
        placeholder="Filter podcasts..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
      />
    </div>
  );
};

export default Filter;
