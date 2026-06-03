export default function LearnLoopLogo() {
  return (
    <div className="inline-flex h-14 items-center gap-[14px]" aria-label="LearnLoop logo">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0FA18F]">
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.25 15.75C5.18 15.75 3.5 14.07 3.5 12C3.5 9.93 5.18 8.25 7.25 8.25C8.56 8.25 9.74 8.92 10.42 10L13.58 14C14.26 15.08 15.44 15.75 16.75 15.75C18.82 15.75 20.5 14.07 20.5 12C20.5 9.93 18.82 8.25 16.75 8.25C15.44 8.25 14.26 8.92 13.58 10L10.42 14C9.74 15.08 8.56 15.75 7.25 15.75Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="text-[24px] font-bold leading-none tracking-[-0.5px]">
        <span className="text-[#161233]">Learn</span>
        <span className="text-[#F26B3A]">Loop</span>
      </span>
    </div>
  );
}
