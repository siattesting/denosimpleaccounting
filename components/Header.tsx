export function Header() {
  return (
    <header class="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative">
      <div class="rainfall w-full h-full absolute" />
      <nav class="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative">
        <a href="/">Image</a>
        <h1>Image</h1>
        <a href="/transactions">Transactions</a>
      </nav>
    </header>
  );
}
