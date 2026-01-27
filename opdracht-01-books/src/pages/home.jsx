import BookList from "../components/BookList";

const Home = () => {
  return (
    <>
      <h1 className="page-title">Top 3 Bestsellers</h1>
      <BookList />
    </>
  );
};

export default Home;