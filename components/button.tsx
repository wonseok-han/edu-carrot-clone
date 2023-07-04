interface ButtonProps {
  text?: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-r-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
      {text}
    </button>
  );
}
