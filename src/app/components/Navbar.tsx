// src/app/components/Navbar.tsx
const NavItem = ({
  text,
  isActive = false,
}: {
  text: string;
  isActive?: boolean;
}) => (
  <a
    href="#"
    className={`self-stretch my-auto ${isActive ? "text-blue-500 underline" : ""}`}
    aria-current={isActive ? "page" : undefined}
  >
    {text}
  </a>
);

const NavDot = () => (
  <div
    className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-gray-900 rounded-full"
    aria-hidden="true"
  />
);

export const Navbar = () => {
  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center py-6 w-full text-gray-900 max-md:max-w-full">
      <div className="flex gap-1.5 self-stretch my-auto w-36 text-xl">
        <div
          className="flex shrink-0 w-6 h-6 bg-gray-900 rounded-sm"
          aria-hidden="true"
        />
        <span className="basis-auto">ABC Company</span>
      </div>

      <div className="flex flex-wrap gap-6 items-center self-stretch p-3 my-auto text-lg font-medium leading-loose min-w-60 max-md:max-w-full">
        <NavItem text="Home" isActive={true} />
        <NavDot />
        <NavItem text="About Us" />
        <NavDot />
        <NavItem text="Case Studies" />
        <NavDot />
        <NavItem text="Services" />
        <NavDot />
        <NavItem text="Contact Us" />
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/143904c0c722478e90e6e96d6b2341b6/d38c8c93a564088312c95cd8902607820f5ba37f?placeholderIfAbsent=true"
        alt="Company logo"
        className="object-contain shrink-0 gap-1.5 self-stretch py-4 my-auto aspect-[3.65] w-[197px]"
      />
    </nav>
  );
};
