interface PrimaryButtonProps {
  text: string;
}

export default function PrimaryButton({
  text,
}: PrimaryButtonProps) {
  return (
    <button
      className="
      mt-10
      px-10
      py-4
      rounded-full
      bg-gradient-to-r
      from-[#C89B3C]
      to-[#E8C76D]
      text-[#4A3528]
      font-semibold
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-yellow-500/50
    "
    >
      {text}
    </button>
  );
}