interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-green-300 text-black rounded-lg tracking-wide border-2 border-transparent uppercase transition-all hover:bg-green-400  hover:scale-105 font-bold py-2 px-8">
      {children}
    </button>
  );
}
