export const Divider = ({ children }: { children: any }) => {
  return (
    <div className='mt-4 mb-6 flex justify-center items-center w-full max-w-xl mx-auto text-4xl text-secondary-500 font-bold text-center before:content-[""] before:border-b before:border-zinc-700 before:flex-grow before:mr-4 before:max-w-64 after:content-[""] after:border-b after:border-zinc-700 after:flex-grow after:ml-4 after:max-w-64'>
      {children}
    </div>
  );
};
export default Divider;
