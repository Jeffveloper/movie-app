const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="relative p-8">{children}</div>;
};

type PageWrapperProps = {
  children: React.ReactNode;
};

export default PageWrapper;
