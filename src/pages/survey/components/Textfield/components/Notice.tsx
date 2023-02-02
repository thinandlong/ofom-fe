interface NoticeProps {
  text: string;
}
const Notice = ({ text }: NoticeProps) => {
  return (
    <span className="bg-gray100 leading-[100%] text-[12px] font-medium text-gray500 p-4 rounded-4">
      {text}
    </span>
  );
};
export default Notice;
