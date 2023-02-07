export default function NavComponent() {
  return (
    <nav class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex ml-6 space-x-8">
              <a href="/">Home</a>
              <a href="/transactions">Transactions</a>
              <a href="/about">About</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
