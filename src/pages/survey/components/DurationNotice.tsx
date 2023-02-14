import Icon from '@components/Icon';

const DurationNotice = () => {
  return (
    <div className="flex">
      <Icon
        name="checkCircle"
        color="gray900"
        size={24}
        style={{ opacity: ' 0.1', marginRight: '8px' }}
      />
      <span className="text-gray-900 opacity-50 text-body_2_MD">무기한</span>
    </div>
  );
};
export default DurationNotice;
