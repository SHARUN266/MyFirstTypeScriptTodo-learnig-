import React, { ChangeEvent, FormEvent, useState } from "react";
type TodoInputProps = {
  onAdd: Function;
};
export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(value);
    setValue("")
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add new"
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
