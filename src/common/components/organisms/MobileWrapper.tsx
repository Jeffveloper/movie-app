const MobileWrapper = ({ children }: MobileWrapperProps) => {
  return (
    <div className="xs:overflow-hidden xs:rounded-md xs:shadow-2xl xs:max-h-full">
      <div className="xs:w-[380px] xs:m-auto xs:h-[700px] bg-gray-900 overflow-y-auto overflow-x-hidden relative scrollbar">
        {children}
      </div>
    </div>
  );
};

type MobileWrapperProps = {
  children: React.ReactNode;
};

export default MobileWrapper;
