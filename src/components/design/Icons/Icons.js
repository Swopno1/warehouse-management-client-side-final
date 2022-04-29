import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/outline';

const Cart = () => {
  return (
    <>
      <ShoppingCartIcon className='w-5 h-5 ml-10 text-black hover:text-dark-gray hover:cursor-pointer' />
    </>
  );
};

const User = () => {
  return (
    <>
      <UserIcon className='w-5 h-5 ml-10 text-black hover:text-dark-gray hover:cursor-pointer' />
    </>
  );
};

const Search = () => {
  return (
    <>
      <SearchIcon className='w-5 h-5 ml-10 text-black hover:text-dark-gray hover:cursor-pointer' />
    </>
  );
};

export { Cart, User, Search };
