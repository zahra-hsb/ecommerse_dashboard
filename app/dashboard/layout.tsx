const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full max-w-prose flex gap-10 p-10 ">
      <div></div>
      <div>{children}</div>
    </section>
  );
};

export default dashboardLayout;
