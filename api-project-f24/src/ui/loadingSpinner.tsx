import useLoadingStore from "../store/LoadingDelay";

export default function LoadingSpinner() {
  const isLoading = useLoadingStore((state) => state.isLoading);
  console.log("Spinner isLoading:", isLoading);
  if (!isLoading) return null; // bara rendring när den har laddas

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
