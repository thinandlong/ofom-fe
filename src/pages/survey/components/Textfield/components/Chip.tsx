interface ChipProps {
  name: string;
}

const Chip = ({ name }: ChipProps) => {
  return (
    <span className="px-8 py-4 w-41 h-29 bg-blue100 rounded-8 text-blue850 text-body_3_BD">
      {name}
    </span>
  );
};
export default Chip;
