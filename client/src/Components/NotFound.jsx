export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <div className="flex gap-4">
        <a href="/">home</a>
        <a href="/login">login</a>
        <a href="/signup">signup</a>
        <a href="/income">income</a>
        <a href="/expenses">expenses</a>
      </div>
    </div>
  );
}
