function Categories() {
  const handleClick = () => {
    console.log('Status checked!');
  };

  return (
    <div>
      <h1>Categories</h1>
      <button type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
}

export default Categories;
