const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>Loading Test Page</h1>
    </div>
  );
};

export default Page;
