import PosterNavBar from "@/components/product/poster/navbar";

export default function PostersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-space-mono">
      <PosterNavBar />
      {children}
    </div>
  );
}
