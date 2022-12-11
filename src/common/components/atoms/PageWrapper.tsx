const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="relative min-h-screen xs:min-h-fit pb-20">{children}</div>
  );
};

type PageWrapperProps = {
  children: React.ReactNode;
};

export default PageWrapper;
