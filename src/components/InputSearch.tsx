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
      <h3 className="text-base tracking-tighter font-semibold sm:text-lg xl:text-xl mb-2">
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
          <Button type="submit">Add</Button>
        </div>
        {/* <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Buscar
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar Gifs"
          required
          value={inputValue}
          onChange={handleInputChanged}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Agregar
        </button>
      </div> */}
      </form>
    </>
  );
};
