import { useRouter } from "next/router";
import { Cross } from "../icons/cross";

export function PageTemplate({
  color = "white",
  children,
}: {
  color: "red" | "white" | "grey";
  children: React.ReactNode;
}) {
  const { back } = useRouter();

  return (
    <div
      data-page-color={color}
      // className={`h-full ${
      //   color === "red"
      //     ? "bg-cherry"
      //     : color === "white"
      //     ? "bg-white"
      //     : "bg-ogrey"
      // }`}
    >
      <header className="flex h-32 w-full items-center justify-center">
        <button onClick={back}>
          <Cross classes="w-6 h-6" isRed={color !== "red"} />
        </button>
      </header>
      {children}
    </div>
  );
}
