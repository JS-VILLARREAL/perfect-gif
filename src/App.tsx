import { useState } from 'react';

import { InputSearch } from './components/InputSearch';
import { GifGrid } from './components/GifGrid';
import toast from 'react-hot-toast';

export const App = () => {
  const [categories, setCategories] = useState(['Solo Leveling']);

  const onAddCategory = (onNewCategory: string) => {
    if (categories.includes(onNewCategory)) {
      toast.error('¡Categoría ya existe!');
    } else {
      setCategories([...categories, onNewCategory]);
      toast.success('¡Categoría agregada!');
    }
  };

  return (
    <div className="p-20">
      {/* <Header /> */}
      <InputSearch
        // onAddCategory={setCategories}
        onNewCategory={(event: string) => onAddCategory(event)}
      />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </div>
  );
};

export default App;
