import { useState } from 'react';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

// Definir el tipo de las props
interface InputSearchProps {
  onNewCategory: (category: string) => void;
}

// export const InputSearch = ({ onAddCategory }) => {
export const InputSearch = ({ onNewCategory }: InputSearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChanged = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value); // Pasar el valor del input al estado de inputValue
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //Es para que no se recargue la pagina cuando haga el onSubmit
    if (!inputValue.trim()) return; // Validar el valor que no este vacio
    onNewCategory(inputValue.trim());
    // onAddCategory((categories) => [...categories, inputValue]);
    setInputValue('');
  };

  return (
    <>
      <h3 className="text-xs tracking-tighter font-semibold sm:text-lg xl:text-xl mb-2">
        Looking for the perfect GIF? We've got it!
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="flex max-w-xl space-x-2">
          <Input
            type="search"
            placeholder="Search gits"
            required
            value={inputValue}
            onChange={handleInputChanged}
          />
          <Button type="submit" className="font-bold text-xs sm:text-sm">
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
